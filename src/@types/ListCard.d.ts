interface Item {
  id: number;
  name: string;
  frequency: string;
}

interface ListCard {
  item: Item;
  id: number;
  expanded: number;
  toggleView?: func;
}
