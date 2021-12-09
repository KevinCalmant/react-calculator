interface Row {
  label: string;
  operation: string;
}

export const rows: Row[][] = [
  [
    {
      label: '7',
      operation: '7',
    },
    {
      label: '8',
      operation: '8',
    },
    {
      label: '9',
      operation: '9',
    },
    {
      label: 'divide',
      operation: '/',
    },
  ],
  [
    {
      label: '4',
      operation: '4',
    },
    {
      label: '5',
      operation: '5',
    },
    {
      label: '6',
      operation: '6',
    },
    {
      label: 'multiple',
      operation: '*',
    },
  ],
  [
    {
      label: '1',
      operation: '1',
    },
    {
      label: '2',
      operation: '2',
    },
    {
      label: '3',
      operation: '3',
    },
    {
      label: 'minus',
      operation: '-',
    },
  ],
  [
    {
      label: 'clear',
      operation: 'clear',
    },
    {
      label: '0',
      operation: '0',
    },
    {
      label: 'eq',
      operation: '=',
    },
    {
      label: 'plus',
      operation: '+',
    },
  ],
];
