
import {
  ProgressBar,
  ProgressFill,
  StyledTable,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow
} from './styles';


const IdField = ({ value }) => <TableCell>{value}</TableCell>;

const TicketDevopsField = ({ value }) => <TableCell>{value}</TableCell>;

const TitleField = ({ value }) => <TableCell>{value}</TableCell>;

const TotalRecordsField = ({ value }) => <TableCell>{value}</TableCell>;

const DateField = ({ value }) => <TableCell>{value}</TableCell>;

const TimeField = ({ estimated, spent }) => (
  <TableCell>{`${estimated}h / ${spent}h`}</TableCell>
);

const ProgressField = ({ value }) => (
  <TableCell>
    <ProgressBar>
      <ProgressFill progress={value} />
    </ProgressBar>
    {value}%
  </TableCell>
);

const StatusField = ({ value }) => <TableCell>{value}</TableCell>;

const sampleData = [
  {
    id: 1,
    ticketDevops: 'DEV-001',
    title: 'Implement user authentication',
    totalRecords: 150,
    start: '2023-06-01',
    estimatedDelivery: '2023-06-15',
    estimatedTime: 40,
    spentTime: 35,
    progress: 80,
    status: 'In Progress'
  },
  {
    id: 2,
    ticketDevops: 'DEV-002',
    title: 'Optimize database queries',
    totalRecords: 300,
    start: '2023-06-05',
    estimatedDelivery: '2023-06-20',
    estimatedTime: 30,
    spentTime: 25,
    progress: 60,
    status: 'In Progress'
  },
];

export const Table = () => {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Ticket-DevOps</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Total Records</TableHeader>
            <TableHeader>Start</TableHeader>
            <TableHeader>Estimated Delivery</TableHeader>
            <TableHeader>Estimated/Spent Time</TableHeader>
            <TableHeader>Progress</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <IdField value={row.id} />
              <TicketDevopsField value={row.ticketDevops} />
              <TitleField value={row.title} />
              <TotalRecordsField value={row.totalRecords} />
              <DateField value={row.start} />
              <DateField value={row.estimatedDelivery} />
              <TimeField estimated={row.estimatedTime} spent={row.spentTime} />
              <ProgressField value={row.progress} />
              <StatusField value={row.status} />
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};


