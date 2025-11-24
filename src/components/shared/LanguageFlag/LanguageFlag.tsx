export const LanguageFlag = ({
    countryCode,
    proficiency
}: {
    countryCode: string;
    proficiency: string;
}) => {
    return (
        <div className="relative inline-block">
            <img
                src={`https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`}
                alt={`${countryCode} flag`}
                className="w-8 h-8 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                    {proficiency}
                </span>
            </div>
        </div>
    );
};
