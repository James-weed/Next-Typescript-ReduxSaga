import renderer from 'react-test-renderer'
import Card from '../Card'
import { User } from '@/app/model/people'
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom'

export const data = {
    city: "Lauraville",
    country: "Jordan",
    date_of_birth: "1877-11-14T00:00:00",
    email: "mark.harrington.664@slingacademy.com",
    first_name: "Mark",
    gender: "male",
    id: 664,
    job: "Location manager",
    last_name: "Harrington",
    latitude: 54.514374,
    longitude: -154.039817,
    phone: "001-789-495-2116x3490",
    profile_picture: "https://api.slingacademy.com/public/sample-users/default.png",
    state: "Iowa",
    street: "98335 Mccormick Brooks Suite 378",
    zipcode: 55555
}

it('changes the class when hovered', () => {
    const component = renderer.create(
      <Card data={data}></Card>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
      tree.props.onMouseEnter();
    });

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
      tree.props.onMouseLeave();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });