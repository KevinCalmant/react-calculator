interface Row {
  label: string;
  operation: string | null;
}

export const rows: Row[][] = [
  [
    {
      label: '7',
      operation: null,
    },
    {
      label: '8',
      operation: null,
    },
    {
      label: '9',
      operation: null,
    },
    {
      label: 'divide',
      operation: '/',
    },
  ],
  [
    {
      label: '4',
      operation: null,
    },
    {
      label: '5',
      operation: null,
    },
    {
      label: '6',
      operation: null,
    },
    {
      label: 'multiple',
      operation: '*',
    },
  ],
  [
    {
      label: '1',
      operation: null,
    },
    {
      label: '2',
      operation: null,
    },
    {
      label: '3',
      operation: null,
    },
    {
      label: 'minus',
      operation: '-',
    },
  ],
  [
    {
      label: 'clear',
      operation: 'clear'
    },
    {
      label: '0',
      operation: null
    },
    {
      label: 'eq',
      operation: '='
    },
    {
      label: 'plus',
      operation: '+'
    }
  ]
];
