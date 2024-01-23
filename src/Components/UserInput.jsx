
export default function UserInput({onChange, userInput}) {
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial investment">
                        initial investment
                    </label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(e) =>
                            onChange("initialInvestment", e.target.value)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="annual investment">annual investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(e) =>
                            onChange("annualInvestment", e.target.value)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected return">expected return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(e) =>
                            onChange("expectedReturn", e.target.value)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="duration">duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(e) =>
                            onChange("duration", e.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
}
