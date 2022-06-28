import { sum } from '../utils/sum';
import { formatCurrency } from '../utils/formatCurrency';

interface IEmployee {}

const renderRows = (row: IEmployee) => (
  <tr>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {row.firstName}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {row.lastName}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {row.email}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {formatCurrency(sum([row.age, row.height]), { currency: 'USD' })}
    </td>
  </tr>
);

export const EmployeeRow = (props: any) => {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            First name
          </th>
          <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Last name
          </th>
          <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Email
          </th>
          <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Years of XP
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {!!props.employees.length ? (
          props.employees.forEach((employee: IEmployee) => renderRows(employee))
        ) : (
          <tr>
            <td>No results...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
