
"use client";
import React, { useState } from 'react';
import { Button, Checkbox,  ContainedList, ContainedListItem } from '@carbon/react';;

import './globals.scss';
interface Item {
  id: number;
  name: string;
}

const TransferList: React.FC = () => {
  const [leftList, setLeftList] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);
  const [rightList, setRightList] = useState<Item[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number[]>([]);
  const [selectedRight, setSelectedRight] = useState<number[]>([]);

  const moveSelected = (from: Item[], to: Item[], setFrom: React.Dispatch<React.SetStateAction<Item[]>>, setTo: React.Dispatch<React.SetStateAction<Item[]>>, selected: number[], setSelected: React.Dispatch<React.SetStateAction<number[]>>) => {
    const itemsToMove = from.filter(item => selected.includes(item.id));
    setTo([...to, ...itemsToMove]);
    setFrom(from.filter(item => !selected.includes(item.id)));
    setSelected([]);
  };

  const moveAll = (from: Item[], to: Item[], setFrom: React.Dispatch<React.SetStateAction<Item[]>>, setTo: React.Dispatch<React.SetStateAction<Item[]>>) => {
    setTo([...to, ...from]);
    setFrom([]);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>

    <ContainedList label="List title" kind="on-page">
      {leftList.map(item => (
              <ContainedListItem
                key={item.id}         
                >   {item.name}   </ContainedListItem>
      ))}
    </ContainedList>


      

      <div style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}>
        <Button onClick={() => moveSelected(leftList, rightList, setLeftList, setRightList, selectedLeft, setSelectedLeft)}>Move Selected →</Button>
        <Button onClick={() => moveAll(leftList, rightList, setLeftList, setRightList)}>Move All →</Button>
        <Button onClick={() => moveSelected(rightList, leftList, setRightList, setLeftList, selectedRight, setSelectedRight)}>← Move Selected</Button>
        <Button onClick={() => moveAll(rightList, leftList, setRightList, setLeftList)}>← Move All</Button>
      </div>

      <ContainedList label="List title" kind="on-page">
      {leftList.map(item => (
              <ContainedListItem
                key={item.id}         
                >   {item.name}   </ContainedListItem>
      ))}
    </ContainedList>
    </div>
  );
};

export default TransferList;
