export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Support both parsed and raw JSON bodies (Vercel/Node differences)
    let body = req.body
    if (!body) {
      const chunks = []
      for await (const chunk of req) chunks.push(chunk)
      const raw = Buffer.concat(chunks).toString('utf8')
      try { body = JSON.parse(raw || '{}') } catch { body = {} }
    }

    const { name, email, message } = body || {}
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return res.status(500).json({ error: 'Missing RESEND_API_KEY on server' })
    }
    const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'
    const to = process.env.CONTACT_TO_EMAIL || 'official@isa-asu.com'

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `ISA Contact: ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
        reply_to: email,
      }),
    })

    if (!r.ok) {
      let detail
      try { detail = await r.json() } catch { detail = await r.text() }
      return res.status(400).json({ error: 'Resend error', detail })
    }

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Server error' })
  }
}


