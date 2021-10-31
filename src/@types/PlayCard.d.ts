interface Item {
  id: number;
  name: string;
  frequency: string;
}

interface PlayCard {
  item: {} | Item;
}
