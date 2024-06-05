import {render,screen} from "@testing-library/react";
import {MOCK_DATA} from "../mockData/RestaurantCardMockData"
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";

it("Should render RestaurantCard component with props data", () => {

    render(<RestaurantCard resList={MOCK_DATA}/>);

    const restaurantName = screen.getByText("KFC");

    expect(restaurantName).toBeInTheDocument();

});