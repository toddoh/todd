import styled from "styled-components";

const Content = styled.div`
  position: relative;
  margin: 0 45vw 0 5vw;
  padding: 3vw 0;
  display: flex;
  flex-flow: column;
`;

const WorkplaceName = styled.span`
  font-size: 1.2em;
  font-weight: 600;
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
        <WorkplaceName>{workplace.name}</WorkplaceName>
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
