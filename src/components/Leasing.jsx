import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Home,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  BedDouble,
  Bath,
  Calendar,
  Loader2,
  AlertCircle,
} from "lucide-react";

function formatDate(value) {
  if (!value) return null;
  const d = new Date(value);
  return isNaN(d.getTime())
    ? value
    : d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
}

function formatPrice(value) {
  if (value == null || value === "") return null;
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function ListingCard({ listing, index }) {
  const title =
    listing.apartment_name ??
    listing.title ??
    listing.name ??
    listing.headline ??
    `Listing ${index + 1}`;
  const description = listing.description ?? listing.details ?? "";
  const address =
    listing.address ?? listing.location ?? listing.area ?? "";
  const listingUrl = listing.listing_url ?? listing.url ?? "";
  const phoneNumber = listing.phone_number ?? listing.phone ?? "";
  const price =
    formatPrice(listing.price) ??
    formatPrice(listing.rent) ??
    listing.price_display ??
    "";
  const ttl = listing.ttl; // lease term (e.g. months)
  const contact =
    listing.contact_email ?? listing.contact ?? listing.email ?? "";
  const bedrooms = listing.bedrooms ?? listing.beds;
  const bathrooms = listing.bathrooms ?? listing.baths;
  const available =
    listing.available_from ?? listing.available_date ?? listing.available;
  const created = formatDate(listing.created_at);
  const imageUrl =
    listing.image_url ?? listing.photo_url ?? listing.image ?? null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Card className="h-full border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-shadow duration-300">
        {imageUrl && (
          <div className="aspect-video w-full overflow-hidden bg-gray-100">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-saffron transition-colors line-clamp-2">
            {title}
          </CardTitle>
          {(price || created) && (
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {price && (
                <Badge variant="indian" className="text-sm font-semibold">
                  {price}/month
                </Badge>
              )}
              {created && (
                <span className="text-xs text-gray-500">{created}</span>
              )}
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          {description && (
            <CardDescription className="text-gray-600 line-clamp-3 text-sm">
              {description}
            </CardDescription>
          )}
          <ul className="space-y-2 text-sm text-gray-700">
            {address && (
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-saffron flex-shrink-0" />
                <span className="line-clamp-2">{address}</span>
              </li>
            )}
            {ttl != null && ttl !== "" && (
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-saffron flex-shrink-0" />
                <span>Lease term: {ttl} month{Number(ttl) !== 1 ? "s" : ""}</span>
              </li>
            )}
            {bedrooms != null && (
              <li className="flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-saffron flex-shrink-0" />
                <span>{bedrooms} bed(s)</span>
              </li>
            )}
            {bathrooms != null && (
              <li className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-saffron flex-shrink-0" />
                <span>{bathrooms} bath(s)</span>
              </li>
            )}
            {available && (
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-saffron flex-shrink-0" />
                <span>
                  {typeof available === "string" &&
                  available.match(/^\d{4}-\d{2}-\d{2}/)
                    ? formatDate(available)
                    : available}
                </span>
              </li>
            )}
          </ul>
          <div className="flex flex-wrap gap-3 mt-3">
            {listingUrl && (
              <a
                href={listingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-saffron hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                View listing
              </a>
            )}
            {phoneNumber && (
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-saffron hover:underline"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            )}
            {contact && (
              <a
                href={
                  contact.startsWith("mailto:") ? contact : `mailto:${contact}`
                }
                className="inline-flex items-center gap-2 text-sm font-medium text-saffron hover:underline"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Leasing() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch("/api/leasing-listings")
      .then((res) => {
        if (!res.ok)
          throw new Error(
            res.status === 404
              ? "Endpoint not found"
              : `Request failed: ${res.status}`,
          );
        return res.json();
      })
      .then((data) => {
        if (!cancelled) {
          setListings(Array.isArray(data) ? data : []);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || "Failed to load listings");
          setListings([]);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="min-h-screen py-20 pt-28 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-saffron to-orange rounded-full mx-auto mb-6 flex items-center justify-center">
            <Home className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Sublease & Leasing Listings
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse available subleases and housing listings from the ISA
            community.
          </p>
        </motion.div>

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <Loader2 className="w-10 h-10 text-saffron animate-spin mb-4" />
            <p className="text-gray-600">Loading listings...</p>
          </motion.div>
        )}

        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <Card className="border-amber-200 bg-amber-50/80">
              <CardContent className="flex items-center gap-3 pt-6">
                <AlertCircle className="w-10 h-10 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">
                    Could not load listings
                  </p>
                  <p className="text-sm text-gray-600">{error}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {!loading && !error && listings.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 rounded-2xl bg-gradient-to-r from-saffron/10 via-orange/10 to-green/10"
          >
            <Home className="w-12 h-12 text-saffron/60 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">No listings yet</p>
            <p className="text-sm text-gray-500 mt-1">
              Check back later for sublease and housing options.
            </p>
          </motion.div>
        )}

        {!loading && !error && listings.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {listings.map((listing, index) => (
              <ListingCard
                key={listing.id ?? index}
                listing={listing}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
