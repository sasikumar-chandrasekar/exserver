console.log("Hello via Bun!");

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}   

export const PI = 3.14159;

export const E = 2.71828;   

export function circleArea(radius: number): number {
    return PI * radius * radius;
    }

export function circleCircumference(radius: number): number {
    return 2 * PI * radius;
    }

export function exponentialGrowth(base: number, rate: number, time: number): number {
    return base * Math.pow(E, rate * time);
    }

export function logarithm(value: number, base: number = E): number {
    return Math.log(value) / Math.log(base);
    }

export function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
    }

export function squareRoot(value: number): number {
    return Math.sqrt(value);
    }

export function absoluteValue(value: number): number {
    return Math.abs(value);
    }

export function round(value: number, decimals: number = 0): number {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
    }

export function floor(value: number): number {
    return Math.floor(value);
    }

export function ceil(value: number): number {
    return Math.ceil(value);
    }

console.log("add(5, 3):", add(5, 3));
console.log("subtract(10, 4):", subtract(10, 4));
console.log("multiply(6, 7):", multiply(6, 7));
console.log("divide(20, 4):", divide(20, 4));
console.log("circleArea(5):", circleArea(5));
console.log("circleCircumference(5):", circleCircumference(5));
console.log("exponentialGrowth(100, 0.05, 10):", exponentialGrowth(100, 0.05, 10));
console.log("logarithm(10):", logarithm(10));
console.log("power(2, 8):", power(2, 8));
console.log("squareRoot(16):", squareRoot(16));
console.log("absoluteValue(-42):", absoluteValue(-42));
console.log("round(3.14159, 2):", round(3.14159, 2));
console.log("floor(4.9):", floor(4.9));
console.log("ceil(4.1):", ceil(4.1));




const server = Bun.serve({
  port: 3000,
  routes: {
    "/": (request) => {
      return new Response("Hello from Bun server!", {
        headers: { "Content-Type": "text/plain" },
      });
    },
  }
});

console.log("Bun server is running on http://localhost:3000");  