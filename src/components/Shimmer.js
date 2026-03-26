const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="shimmer-card bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
          >
            {/* Image placeholder */}
            <div className="h-48 bg-gray-300"></div>

            {/* Content placeholder */}
            <div className="p-4 space-y-3">
              {/* Restaurant name */}
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>

              {/* Rating and delivery time */}
              <div className="flex justify-between items-center">
                <div className="h-3 bg-gray-300 rounded w-16"></div>
                <div className="h-3 bg-gray-300 rounded w-20"></div>
              </div>

              {/* Description lines */}
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
              </div>

              {/* Price */}
              <div className="h-3 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
