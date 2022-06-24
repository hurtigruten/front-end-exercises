const renderRows = (row: any) => (
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
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {props.employees.forEach((employee: any) => renderRows(employee))}
      </tbody>
    </table>
  );
};
