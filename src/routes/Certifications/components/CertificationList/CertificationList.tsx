import type { Certification } from "../../../../global";
import { ListContainer } from "../../../../components/shared/ListContainer/ListContainer";

export const CertificationList = ({
    certifications,
}: {
    certifications: Certification[];
}) => {
    return (
        <ListContainer
            items={certifications}
            type="certification"
            layout="grid"
        />
    );
};
