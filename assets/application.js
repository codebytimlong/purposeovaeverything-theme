// Put your application javascript here
document.addEventListener( 'DOMContentLoaded', ( event ) => {
    console.log("loaded");
    const nav = navigation( "NavOpenMenu", "NavCloseMenu" );
} );

// Site Navigation --------------------------
function navigation ( openMenuElemID, closeMenuElemID ) {
    _this = this;

    _this.init = function () {
        _this.navigationElem = document.getElementById('navigation'); // maybe pass this along with open and close elements
        _this.openMenuElem = document.getElementById( openMenuElemID );
        _this.closeMenuElem = document.getElementById( closeMenuElemID );
        _this.addEventListeners();
    }

    _this.addEventListeners = function () {
        _this.openMenuElem.addEventListener('click', function (event) {
            _this.openMenu();
        });

        _this.closeMenuElem.addEventListener('click', function (event) {
            _this.closeMenu();
        });
    }

    _this.openMenu = function () {
        console.log('openMenu()');
        if ( _this.navigationElem.classList.contains('close') ) {
            console.log(anime);
            anime({
                targets: '#navigation',
                left: '0',
                easing: 'linear',
                duration: 200
            });
            _this.navigationElem.classList.remove('close');
        }
    }

    _this.closeMenu = function () {
        if ( !_this.navigationElem.classList.contains('close') ) {
            anime({
                targets: '#navigation',
                left: '-66.6667%',
                easing: 'linear',
                duration: 200
            });
            _this.navigationElem.classList.add('close');
        }
    }

    _this.init();
}


// Image gallery


