import { TopNavBar } from './components/TopNavBar';

export function App() {
    return (
        <div className='app-shell'>
            <TopNavBar />

            <main className='app-main'>
                <p className='placeholder'>More to come — recipes, meal plan, shopping list, and cooking plan.</p>
            </main>
        </div>
    );
}
