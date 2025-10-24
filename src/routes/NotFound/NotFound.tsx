import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { PageContainer } from "../Layout/components/PageContainer/PageContainer";
import { PageContent } from "../Layout/components/PageContent/PageContent";
import { PageHeader } from "../Layout/components/PageHeader/PageHeader";
import { PageTitle } from "../Layout/components/PageTitle/PageTitle";

export const NotFound = () => {
    return (
        <PageContainer id="not-found">
            <PageHeader>
                <PageTitle text="404" strongText="Page Not Found" />
            </PageHeader>
            <PageContent>
                <div className="flex flex-col items-center justify-center gap-8 py-12">
                    <div className="text-8xl md:text-9xl font-bold text-portfolio-gold opacity-20">
                        404
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg text-gray-300 max-w-md text-center">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        className="px-6 py-3 bg-transparent border-2 border-portfolio-white text-portfolio-white hover:border-portfolio-green transition-all rounded-lg font-lunasima text-lg flex items-center gap-3 group"
                    >
                        <Home className="w-5 h-5 transition-colors group-hover:text-portfolio-green" />
                        <span>Go Back Home</span>
                    </Link>
                </div>
            </PageContent>
        </PageContainer>
    );
};
