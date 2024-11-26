import Link from 'next/link';

export default function TipsCard() {
  return (
    <div className="mb-12">
      <Link 
        href="/wellness-trio"
        className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white max-w-2xl mx-auto"
      >
        <div className="flex items-center space-x-2">
          <span className="text-2xl" role="img" aria-label="Tips">
            💡
          </span>
          <div>
            <h3 className="font-semibold text-lg">Essential Tips</h3>
            <p className="text-sm text-gray-600 mt-1">
              Seeing a nutritionist? Start with these must-know tips for your health journey!
            </p>
            <div className="flex items-center mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">
                Top rated advice
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
} 