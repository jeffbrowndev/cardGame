import { Card } from "../elements/Card";

export type UserInput = {
    type: "activeCard" | "inactiveCard" | "cardSlot";
    target?: Card,
}