// Samuel Dameg

import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="hero">
                <div className="hero-label">Fresh Groceries</div>
                <h1>Shop smart,<br />eat <span>fresh</span>.</h1>
                <p>
                    Browse our curated selection of fresh produce, dairy, bakery,
                    and prepared foods. Adjust quantities and see your total instantly.
                </p>
                <div className="hero-actions">
                    <button className="btn-primary" onClick={() => navigate('/order')}>
                        Start Shopping
                    </button>
                    <button className="btn-secondary" onClick={() => navigate('/registration')}>
                        Get Promotions
                    </button>
                </div>
            </div>

            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">🥦</div>
                    <h3>Fresh & Local</h3>
                    <p>Sourced daily from local farms and suppliers. Quality you can taste.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🛒</div>
                    <h3>Easy Ordering</h3>
                    <p>Adjust quantities with a tap. Your running total updates in real time.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🏷️</div>
                    <h3>Exclusive Deals</h3>
                    <p>Register for promotions and get notified about weekly specials.</p>
                </div>
            </div>
        </>
    );
}

export default HomePage;
