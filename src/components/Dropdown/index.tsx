import React, { useState } from 'react';
import { IItem } from '../../interfaces/Item';
import Icon from '../Icon';
import DropdownItem from './DropdownItem';
import SelectedItem from './SelectedItem';
import DropdownStyle from './Dropdown.module.css';

interface DropdownProps {
  items: Array<IItem>;
  multiSelect?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  multiSelect = false,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<IItem[]>([]);

  const openToggle = (): void => setOpen(!open);

  const removeSelection = (itemId: number): void => {
    const filteredSelections = [...selection].filter(
      (current) => current.id !== itemId,
    );
    setSelection([...filteredSelections]);
  };

  function toggleSelect(item: IItem) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection((prevState) => [...prevState, item]);
      }
    } else {
      removeSelection(item.id);
    }
  }

  const isSelected = (item: IItem): boolean => {
    return selection.some((current) => current.id === item.id);
  };

  return (
    <div className={DropdownStyle.dropdownWrapper}>
      <div
        className={DropdownStyle.dropdown}
        onClick={() => !selection.length && openToggle()}>
        <div className={DropdownStyle.selectionList}>
          {selection.length ? (
            selection.map((item) => (
              <SelectedItem
                key={item.id}
                title={item.lang}
                itemId={item.id}
                removeSelection={removeSelection}
              />
            ))
          ) : (
            <span className={DropdownStyle.selectionListTitle}>
              Selecione
            </span>
          )}
        </div>
        <div
          className={DropdownStyle.dropdownListInputIconArrow}
          onClick={openToggle}>
          <Icon
            className={
              !open ? DropdownStyle.dropdownListInputIconArrowRotate : ''
            }
            name="arrow"
            width="11"
            height="6"
          />
        </div>
      </div>
      {open && (
        <div className={DropdownStyle.dropdownList}>
          {items
            .map((item) => (
              <DropdownItem
                key={item.id}
                item={item}
                toggleSelect={toggleSelect}
                isSelected={isSelected}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
