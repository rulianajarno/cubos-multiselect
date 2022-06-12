import React from 'react';

import { IItem } from '../../../interfaces/Item';
import Icon from '../../Icon';
import DropdownItemStyle from './DropdownItem.module.css';

interface DropdownItemProps {
  item: IItem;
  showIcon?: boolean;
  toggleSelect: (item: IItem) => void;
  isSelected: (item: IItem) => boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  item,
  toggleSelect,
  isSelected,
}) => {
  return (
    <div className={DropdownItemStyle.item}>
      <label
        className={DropdownItemStyle.label}
        onMouseUp={() => toggleSelect(item)}>
          <input
          checked={isSelected(item)}
          className={DropdownItemStyle.checkbox}
          type="checkbox"
        />
        <span>{item.lang}</span>
      </label>
    </div>
  );
};

export default DropdownItem;
