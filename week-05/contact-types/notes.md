# Week 5 — Interfaces, Type Aliases & Unions

## Type Alias

A type alias creates a reusable type rule.

```ts
type Status = "active" | "inactive" | "blocked";
```

Only these three values are allowed.

---

## Interface

An interface describes the shape of an object.

```ts
interface Contact {
  name: string;
  email: string;
  age: number;
  status: Status;
  phone?: string;
}
```

Every Contact must follow this structure.

---

## Optional Properties

The `?` means a property is optional.

```ts
phone?: string;
```

A Contact can have a phone number, but it is not required.

---

## Union Types

The `|` means OR.

```ts
type Status = "active" | "inactive" | "blocked";
```

Status can be active OR inactive OR blocked.

Another example:

```ts
Contact | undefined
```

This means the value can be a Contact OR undefined.

---

## Arrays of Objects

```ts
Contact[]
```

This means an array containing Contact objects.

---

## filter()

`filter()` returns all matching items as an array.

```ts
const blockedContacts = contacts.filter((contact) => {
  return contact.status === "blocked";
});
```

Remember:

`filter()` → multiple matches → array

---

## find()

`find()` returns the first matching item.

```ts
contacts.find((contact) => {
  return contact.email === email;
});
```

Remember:

`find()` → one match → object or undefined

---

## Function Return Types

The type after the function's parentheses tells us what the function returns.

```ts
function getBlockedContacts(): Contact[]
```

`Contact[]` means this function returns an array of Contact objects.

```ts
function findContactByEmail(email: string): Contact | undefined
```

This function returns one Contact OR `undefined` if no contact is found.

---

## void

`void` means a function does something but does not return a value.

```ts
function updateStatus(email: string, newStatus: Status): void {
  // changes the contact's status
}
```

The code inside the function changes the status.

`void` only tells us that the function does not return a value.

---

## Week 5 Key Things I Learned

- `interface` describes the structure of an object.
- `type` can create reusable types.
- A union allows one of several specific values.
- `|` means OR in a union.
- `?` makes a property optional.
- `Contact[]` means an array of Contact objects.
- `filter()` returns all matching items in an array.
- `find()` returns the first matching item or `undefined`.
- `void` means a function does something but returns no value.
- Union types protect us from using invalid values.
- `Status` only allows `"active"`, `"inactive"`, or `"blocked"`.