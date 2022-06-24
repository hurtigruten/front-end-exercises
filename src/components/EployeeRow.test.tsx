import renderer from 'react-test-renderer';

import { EmployeeRow } from './EmployeeRow';

test('renders correctly', () => {
  const data = [
    {
      id: 1001,
      imageUrl: 'https://hub.dummyapis.com/Image?text=BK&height=120&width=120',
      firstName: 'Brooke',
      lastName: 'Konopelski',
      email: 'Brooke.Konopelski@dummyapis.com',
      contactNumber: '4867894898',
      age: 37,
      dob: '17/02/1985',
      salary: 1.0,
      address: 'Address1',
    },
    {
      id: 1002,
      imageUrl: 'https://hub.dummyapis.com/Image?text=DL&height=120&width=120',
      firstName: 'Dora',
      lastName: 'Leuschke',
      email: 'Dora.Leuschke@dummyapis.com',
      contactNumber: '4698395712',
      age: 40,
      dob: '01/10/1982',
      salary: 2.0,
      address: 'Address2',
    },
  ];

  const component = renderer.create(<EmployeeRow employees={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
