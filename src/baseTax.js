export const baseTax = [
    {
        annualCap: 5000,
        first: 0,
        taxOnFirst: 0,
        next: 5000,
        nextTax: 0,
    },
    {
        annualCap: 20000,
        first: 5000,
        taxOnFirst: 0,
        next: 15000,
        nextTax: 0.01
    },
    {
        annualCap: 35000,
        first: 20000,
        taxOnFirst: 150,
        next: 15000,
        nextTax: 0.03
    },
    {
        annualCap: 50000,
        first: 35000,
        taxOnFirst: 600,
        next: 15000,
        nextTax: 0.08
    },
    {
        annualCap: 70000,
        first: 50000,
        taxOnFirst: 1800,
        next: 20000,
        nextTax: 0.14
    },
    {
        annualCap: 100000,
        first: 70000,
        taxOnFirst: 4600,
        next: 30000,
        nextTax: 0.21
    },
    {
        annualCap: 250000,
        first: 100000,
        taxOnFirst: 10900,
        next: 150000,
        nextTax: 0.24
    },
    {
        annualCap: 400000,
        first: 250000,
        taxOnFirst: 46900,
        next: 150000,
        nextTax: 0.245
    },
    {
        annualCap: 600000,
        first: 400000,
        taxOnFirst: 83650,
        next: 200000,
        nextTax: 0.25
    },
    {
        annualCap: 1000000,
        first: 600000,
        taxOnFirst: 133650,
        next: 400000,
        nextTax: 0.26
    },
    {
        annualCap: 2000000,
        first: 1000000,
        taxOnFirst: 237650,
        next: 1000000,
        nextTax: 0.28
    },
    {
        annualCap: 3000000,
        first: 2000000,
        taxOnFirst: 517650,
        next: 0,
        nextTax: 0.30
    }
]