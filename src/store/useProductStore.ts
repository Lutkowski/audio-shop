import create from 'zustand';
import headphone_1 from '../assets/headphone_1.png'
import headphone_2 from '../assets/headphone_2.png'
import headphone_3 from '../assets/headphone_3.png'
import headphone_4 from '../assets/headphone_4.png'
import headphone_5 from '../assets/headphone_5.png'
import headphone_6 from '../assets/headphone_6.png'

const useProductStore = create(() => ({
    sections: [
        {
            title: "Наушники",
            products: [
                { id: '1', name: 'Apple BYZ S852I', rating: 4.7, price: 2927, img: headphone_1},
                { id: '2', name: 'Apple EarPods', rating: 4.5, price: 2327, img: headphone_2 },
                { id: '3', name: 'Apple EarPods', rating: 4.5, price: 2327, img: headphone_3 },
                { id: '4', name: 'Apple BYZ S852I', rating: 4.7, price: 2927, img: headphone_1 },
                { id: '5', name: 'Apple EarPods', rating: 4.5, price: 2327, img: headphone_2 },
                { id: '6', name: 'Apple EarPods', rating: 4.5, price: 2327, img: headphone_3 },
            ],
        },
        {
            title: "Беспроводные наушники",
            products: [
                { id: '7', name: 'Apple AirPods', rating: 4.7, price: 9527, img: headphone_4 },
                { id: '8', name: 'GERLAX GH-04', rating: 4.7, price: 6527, img: headphone_5 },
                { id: '9', name: 'BOROFONE BO4', rating: 4.7, price: 7527, img: headphone_6 },
            ],
        },
    ],
}));

export default useProductStore