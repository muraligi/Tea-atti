import React from "react";
import "../Header/Header.css";

const Header = () => {
    return (
        <div>
            <header class="p-3 bg-dark text-secondary sticky-top">  
                <div class="row">
                    <div class="ps-4 col-12 col-md-4">
                        <h1>tea atti</h1>
                    </div>
                    <div class="col mt-2">
                        <form action="">
                            <div class="form-group">
                                <input type="text" placeholder="search" class="form-control" />
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md-4 mt-3 d-flex justify-content-start justify-content-md-end">
                        <nav>
                            <ul class="list-inline">
                                <li class="mx-3 list-inline-item"><a class=" text-decoration-none" href="#">Home</a></li>
                                <li class="mx-3 list-inline-item"><a class=" text-decoration-none" href="#">About</a></li>
                                <li class="mx-3 list-inline-item"><a class=" text-decoration-none" href="#">Carts</a></li>
                                <li class="mx-3 list-inline-item"><a class=" text-decoration-none" href="#">Login</a></li>
                                <li class="mx-3 list-inline-item"><a class=" text-decoration-none" href="#">Sign</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>

    );
};

export default Header;