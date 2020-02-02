# Range

A function that mimicks the [python range built-in](https://docs.python.org/3/library/stdtypes.html?highlight=range#range)

## Example Usage

### Simplest form

```typescript
range(5) === [0, 1, 2, 3, 4]
```

### Range form

```typescript
range(0, 5) === [0, 1, 2, 3, 4]
```

### Range step form

```typescript
range(2, 10, 2) === [2, 4, 6, 8]
```

### Reverse range step form

```typescript
range(3, -4, -1) === [3, 2, 1, 0, -1, -2, -3]
```
