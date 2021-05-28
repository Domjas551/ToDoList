import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component{

    constructor(props:any) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
    }

    addItem(e:any) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";

        }

        console.log(this.state.items);

        e.preventDefault();

    }

    deleteItem(key:number) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        console.log(this.state.items);
        this.setState({
            items: filteredItems
        })
        console.log(this.state.items);
    }

    deleteAll() {
        /*
        var alfa = this.state.items.filter(function () {
            return false;
        });
        console.log(alfa);
        this.setState = ({
            items: alfa
        })*/
        console.log("nie działa");
        console.log(".");
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                <form onSubmit={this.addItem}>
                    <input placeholder="enter event" ref={(a)=>this._inputElement=a }></input>
                        <button type="submit">add</button>
                       
                    </form>
                    <button id="del" onClick={this.deleteAll}>clear</button>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem} />
            </div>
            )
    }
}

export default TodoList;