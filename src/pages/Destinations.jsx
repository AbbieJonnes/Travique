import { useEffect, useMemo, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import Loader from "../components/Loader";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const response = await fetch("/destination.json");
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error("Failed to load destinations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, []);
  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(destinations.map((item) => item.category)),
    ];
  }, [destinations]);

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(search.toLowerCase()) ||
      destination.country.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      destination.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <Loader />;
  }


  return (
    <div className="min-h-screen bg-sky-50 py-16">

      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-12">

          <h1 className="text-5xl font-bold text-gray-900">
            Explore Destinations
          </h1>

          <p className="text-gray-600 mt-4">
            Discover amazing places around the world.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">

          <input
            type="text"
            placeholder="Search by destination or country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>

        </div>

        {loading ? (
          <div className="text-center text-xl">
            Loading destinations...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Destinations;