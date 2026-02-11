import { CheckCircle2 } from 'lucide-react';

export default function AffiliationStrip() {
  return (
    <div className="bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-blue-900 font-semibold text-lg">Affiliated with RPS</h3>
              <p className="text-blue-800 text-sm mt-1">
                Recognized by DGT, NCVET & MSDE (Govt. of India)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 md:border-l md:border-blue-200 md:pl-6">
            <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-blue-900 font-semibold text-lg">Affiliated with Skill India Assessment Agency</h3>
              <p className="text-blue-800 text-sm mt-1">
                Government of India Initiative
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
