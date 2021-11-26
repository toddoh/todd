import styled from "styled-components";
import Link from "next/link";

const Content = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 0 0 45px 0;
`;

const WorkplaceName = styled.span`
  font-size: 1.25em;
  font-weight: 600;

  a {
    color: var(--text-color-main);
  }
`;

const WorkplaceTimePeriod = styled.span`
  font-size: 0.9em;
  font-weight: 400;
  margin-top: 5px;
`;

const WorkplaceDeliveryList = styled.ul`
  grid-row-gap: 4px;
  display: grid;
`;

const WorkplaceDeliveryItem = styled.li`
  font-size: 1em;
  font-weight: 400;
  line-height: 1.6em;
`;

export const WorkHistory = ({
  workplace,
}: {
  workplace: {
    id: string;
    name: string;
    url: string;
    title: string;
    period: string;
    location: string;
    items: Array<string>;
  };
}) => {
  return (
    <Content key={workplace.id}>
      <div style={{ display: "flex", flexFlow: "column" }}>
        <WorkplaceName>{workplace.title}</WorkplaceName>
        <WorkplaceName>
          {workplace.url ? (
            <Link href={workplace.url} passHref={true}>
              <a>{workplace.name}</a>
            </Link>
          ) : (
            workplace.name
          )}
        </WorkplaceName>
      </div>
      <WorkplaceTimePeriod>
        {workplace.location}, {workplace.period}
      </WorkplaceTimePeriod>

      <WorkplaceDeliveryList>
        {workplace.items.map((item, idx) => (
          <WorkplaceDeliveryItem key={idx}>{item}</WorkplaceDeliveryItem>
        ))}
      </WorkplaceDeliveryList>
    </Content>
  );
};

export default WorkHistory;
