import { useEffect, useState } from "react";

export const useGenerateMines = (sum: number) => {
    const generateMines = (countMines: number, length: number) => {
        const card: any = [];
        let count = 0;
        for (let i = 0; i < length; i++) {
            card.push([]);
            for (let j = 0; j < length; j++) {
                if (count < countMines && Math.random() > 0.7) {
                    card[i].push({
                        type: "mine",
                        value: 0
                    });
                }
                else {
                    card[i].push({
                        type: "mine",
                        value: Math.random()
                    });
                }
            }
        }
        return card;
    };
    const [mines, setMines] = useState<any[]>(generateMines(sum, 10));


    useEffect(() => {
        setMines(generateMines(5, 15));
    }, [])

    return { mines };
};