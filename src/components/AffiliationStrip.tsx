import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';

export default function AffiliationStrip() {
  return (
    <div className="bg-gray-100 border-y border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left */}
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="text-blue-600 flex-shrink-0 mt-1"
              size={24}
            />
            <div>
              <h3 className="text-gray-900 font-semibold text-lg">
                Recognized Authority
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Regulated by DGT, NCVET & MSDE (Govt. of India)
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-start gap-3 md:border-l md:border-gray-300 md:pl-6">
            <CheckCircle2
              className="text-blue-600 flex-shrink-0 mt-1"
              size={24}
            />
            <div>
              <h3 className="text-gray-900 font-semibold text-lg">
                Skill India Mission Partner
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Standardized Certification Programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
