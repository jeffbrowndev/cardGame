import { Card } from "../Card";

export type UserInput = {
    type: "activeCard" | "inactiveCard" | "playerActiveCards";
    target?: Card,
}