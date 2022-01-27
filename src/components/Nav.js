import React from "react";

function Nav() {
  return (
    <nav className="fixed-top">
        <section class="top-nav">
            <div>
            (┛ಠ_ಠ)┛彡┻━┻
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul class="menu">
                <li>Features</li>
                <li>How It Works</li>
                <li>Pricing</li>
            </ul>
        </section>
    </nav>
  );
}

export default Nav;