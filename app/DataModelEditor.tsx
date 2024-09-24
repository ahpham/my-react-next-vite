"use client";

import React, { useState } from 'react';
import { TextInput, Button, ListItem, OrderedList } from 'carbon-components-react';

interface DataModel {
  name: string;
  property1: string;
  property2: string;
  arrayProperty: string[];
}

const DataModelEditor: React.FC = () => {
  const [data, setData] = useState<DataModel>({
    name: '',
    property1: '',
    property2: '',
    arrayProperty: ["value1", "value2"]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleArrayChange = (index: number, value: string) => {
    const newArray = [...data.arrayProperty];
    newArray[index] = value;
    setData({ ...data, arrayProperty: newArray });
  };

  const addArrayItem = () => {
    setData({ ...data, arrayProperty: [...data.arrayProperty, ''] });
  };

  return (
    <div>
      <TextInput
        id="name"
        name="name"
        labelText="Name"
        value={data.name}
        onChange={handleChange}
      />
      <TextInput
        id="property1"
        name="property1"
        labelText="Property 1"
        value={data.property1}
        onChange={handleChange}
      />
      <TextInput
        id="property2"
        name="property2"
        labelText="Property 2"
        value={data.property2}
        onChange={handleChange}
      />
      <OrderedList>
        {data.arrayProperty.map((item, index) => (
          <ListItem key={index}>
            <TextInput
              id={`arrayProperty-${index}`}
              labelText={`Array Property ${index + 1}`}
              value={item}
              onChange={(e) => handleArrayChange(index, e.target.value)}
            />
          </ListItem>
        ))}
      </OrderedList>
      <Button onClick={addArrayItem}>Add Array Item</Button>
    </div>
  );
};

export default DataModelEditor;
