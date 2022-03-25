import React from "react";
import Content from './Content';
import BookShelf from "./BookShelf";

export default function ContentSwitcher({status = 0}) {
    if (status === 0) {
        return (
            <BookShelf/>
        )
    }
    return (
        <Content/>
    )
}