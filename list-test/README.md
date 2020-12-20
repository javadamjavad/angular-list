## Do NOT push to or fork this repo

Clone this repository, and create your own based on it.

### Goal:

Create a standalone component that lists the provided data and allows the client to view in either a 'list' view, or a 'grid' view.

---

#### Requirements:

- The grid/row items must match the design at https://www.figma.com/file/27pUiH9CXEgXka5AR1WUCt/Front-End-Angular-Test?node-id=0%3A1 (The actions for the item are not important)
- Designs are expected to be pixel perfect
- The component must accept an input of Product[]
- The component must output the clicked item
- The component must be visually appealing
- The component must be responsive
- The component must utilize NgRx
- The component must utilize Flexbox grid

#### Rules:

- Must utilize the files and dependencies already included.
- No additional libraries are to be installed.

---

### Further Information

#### Models

```typescript
export interface Product {
  // Expected value: 1
  productId: string;
  // Expected value: http://...
  imagePath: string;
  // Expected value: 4.9
  rating: number;
  // Expected value: 99
  percentage: number;
  // Expected value: 1.2K
  tags: string;
  // Expected value: Xiaomi Wifi Extender
  title: string;
  // Expected value: 12.00
  price: number;
  // Expected value: true
  ePacket: boolean;
  // Expected value: new Date()
  createdAt: Date;
}
```

#### Endpoints:

http://localhost:4200/api/products
(Returns an array of type Product)

#### Expected time:

1.5 hours.

---

#### Submission instructions:

- Deploy the application to Netlify
- Send us a link to the repo, along with the netlify link. No further action is required.
