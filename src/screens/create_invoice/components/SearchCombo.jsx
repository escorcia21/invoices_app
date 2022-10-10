import { useState } from "react";
import { useCombobox } from "downshift";

export default function SearchCombo({ options, label, name , handleChange }) {
    const [items, setItems] = useState(options)

    function onInputValueChange({ inputValue }) {
        setItems(
            options.filter((item) =>
                item[name].toLowerCase().startsWith(inputValue.toLowerCase())
            )
        )
    }

    function onSelectedItemChange({ selectedItem }) {
        handleChange(selectedItem)
    }

    function itemToString(item) {
        return item ? item[name] : ''
    }

    const {
        isOpen,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        getItemProps,
    } = useCombobox({
        items,
        onInputValueChange,
        onSelectedItemChange,
        itemToString
    })
    
    return (
        <div className="form__field" >
            <label htmlFor={name}>{label}</label>
            <div {...getComboboxProps()}>
                <input {...getInputProps()} type="text"/>
            </div>
            <div id="combobox">
                <ul {...getMenuProps()} style={ { display: isOpen ? 'block': 'none' }}>
                
                    {
                        isOpen && 
                        items.map((item, index) => (
                            <li
                                key={`${index}`}
                                {...getItemProps({ item, index })}
                            >
                                <span>
                                    {
                                        'clientID' in item ? item.clientID : `${item.productID} - ${item.price}USD`
                                    }
                                </span>
                                <span>{item[name]}</span>
                            </li>
                        ))  
                    }
                
                </ul>
            </div>
        </div>
    );
}