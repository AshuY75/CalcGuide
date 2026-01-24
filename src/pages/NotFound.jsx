import { Link } from 'react-router-dom'
const Helmet = () => null;
import { ROUTES } from '../routes/paths'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <Helmet>
                <title>Page Not Found - 404 | CalcGuide</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center max-w-md w-full">
                <div className="text-6xl mb-4">🧭</div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
                <p className="text-slate-600 mb-8">
                    Oops! The calculator or page you are looking for seems to be missing or moved.
                </p>

                <div className="space-y-3">
                    <Link
                        to={ROUTES.HOME}
                        className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
                    >
                        Go to Homepage
                    </Link>
                    <div className="grid grid-cols-2 gap-3">
                        <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="py-2 px-4 rounded-lg bg-slate-50 text-slate-700 text-sm font-medium hover:bg-slate-100 border border-slate-200">EMI Calculator</Link>
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="py-2 px-4 rounded-lg bg-slate-50 text-slate-700 text-sm font-medium hover:bg-slate-100 border border-slate-200">SIP Calculator</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
