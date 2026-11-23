/**
 *
 * Program:     Kurve
 * Author:      Markus Mächler, marmaechler@gmail.com
 * License:     http://www.gnu.org/licenses/gpl.txt
 * Link:        http://achtungkurve.com
 *
 * Copyright © 2014, 2015 Markus Mächler
 *
 * Kurve is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Kurve is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Kurve.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

'use strict';

var Kurve = {
    
    players: [],
    playersById: {},
    
    init: function() {
        if (u.isSafari()) u.addClass('is-safari', 'app');
        if (u.isIE())  u.addClass('is-ie', 'app');

        this.Theming.init();
        this.Sound.init();
        this.initPlayers();
        this.Menu.init();
        this.Game.init();
        this.Lightbox.init();
        this.Privacypolicy.init();

        u.removeClass('hidden', 'app');
    },
        
    initPlayers: function() {
        var colorIds = this.getShuffledColorIds();

        Kurve.Config.Players.forEach(function(playerConfig, index) {
            var player = new Kurve.Player(colorIds[index], playerConfig.keyLeft, playerConfig.keyRight, playerConfig.keySuperpower, playerConfig.name);

            Kurve.players.push(player);
            Kurve.playersById[player.getId()] = player;
        });
    },

    /**
     * Returns one color id per player slot: a random pair from PersonalColorPairs (in random order)
     * for the named players, followed by the remaining colors for the guests.
     */
    getShuffledColorIds: function() {
        var pairs = Kurve.Config.PersonalColorPairs;
        var pair = pairs[Math.floor(Math.random() * pairs.length)].slice();

        if ( Math.random() < 0.5 ) pair.reverse();

        var remaining = Object.keys(Kurve.Config.Theming.default.players).filter(function(colorId) {
            return pair.indexOf(colorId) === -1;
        });

        return pair.concat(remaining);
    },

    getPlayer: function(playerId) {
        return this.playersById[playerId];
    },

    reload: function() {
        location.reload();
    },

    onUnload: function() {
        Kurve.Piwik.trackPageView();
    }

};

document.addEventListener('DOMContentLoaded', Kurve.init.bind(Kurve));
