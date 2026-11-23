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

Kurve.Config = {

    Debug: {
        curvePosition: false,
        curveTrace: false,
        fieldDrawnPixels: false,
    },
    
    Field: {
        defaultColor: '#333333',
        defaultLineWidth: 4,
        borderColor: '#ACAC9D',
        width: 0.7, //70% percent of the screen
    },
    
    Curve: {
        stepLength: 1.4,
        lineWidth: 4,
        dAngle: 0.035,
        holeInterval: 150,
        holeIntervalRandomness: 300,
        selfCollisionTimeoutInFrames: 5,
    },
    
    Game: {
        startDelay: 3000,
        fps: 60,
        initialSuperpowerCount: 2,
    },

    Superpower: {
        maxSuperpowers: 6,
        // How strongly the random superpower favours trailing players (0 = no catch-up, 1 = maximum).
        catchUpStrength: 0.8,
    },

    Sound: {
        soundPath: 'dist/sound/',
        fadeTimeOut: 60
    },
    
    // Players with a name are activated automatically and get one of the PersonalColorPairs.
    // The remaining colors go to the unnamed guest slots.
    Players: [
        { name:'Moritz', keyLeft:49,   keyRight:81,   keySuperpower:65  },
        { name:'Marle',  keyLeft:37,   keyRight:40,   keySuperpower:39  },
        {                keyLeft:89,   keyRight:88,   keySuperpower:67  },
        {                keyLeft:66,   keyRight:78,   keySuperpower:77  },
        {                keyLeft:76,   keyRight:79,   keySuperpower:80  },
        {                keyLeft:53,   keyRight:54,   keySuperpower:55  },
    ],

    // Color combinations that contrast well in both themes. One is picked at random on every page load.
    PersonalColorPairs: [
        ['red', 'blue'],
        ['orange', 'blue'],
        ['orange', 'purple'],
        ['green', 'pink'],
        ['green', 'purple'],
        ['pink', 'blue'],
    ],

    Messages: {
        deathMatch: 'HASEN-DUELL!',
        // {winner} and {loser} are replaced with player names. The loser is the player with the fewest points.
        win: [
            '{winner} gewinnt! {loser}, Kopf hoch, Hase. 🐰',
            'Sorry Hase, {winner} war heute einfach schneller.',
            '{loser} schuldet {winner} jetzt eine Massage.',
            '{winner} ist offiziell Chef-Hase. Bis zur nächsten Runde.',
            '{loser} macht heute den Abwasch. Das sind die Regeln.',
            '{winner} gewinnt! {loser} behauptet natürlich, die Tastatur hat gehakt.',
            'Hasenalarm! {winner} hat {loser} komplett eingemauert.',
            '{winner} gewinnt. {loser} darf trotzdem weiter kuscheln. Gerade so.',
            '{loser}, das war... mutig. 🥕',
            '{winner} schnappt sich die letzte Möhre. 🥕',
            '{winner} gewinnt! Dafür darf {loser} den nächsten Film aussuchen.',
            'Und der goldene Möhren-Pokal geht an... {winner}! 🏆',
            '{loser} ist gegen die Wand gefahren. Wieder mal.',
            '{winner}: 1, {loser}: 0, Ausreden: unendlich.',
            '{winner} gewinnt! {loser} hat natürlich absichtlich verloren. Aus Liebe.',
            '{winner} war schneller als jeder Hase. {loser} eher so Igel. 🦔',
            '{loser} kocht heute. {winner} hat gesprochen.',
            'Ein Hase hat gewonnen. Der andere Hase schmollt jetzt. 🐰',
            '{winner} gewinnt! Siegerkuss bitte sofort einlösen. 💋',
            'Revanche? {loser} besteht darauf.',
        ],
    },

    Theming: {
        default: {
            players: {
                red: '#D4373E',
                orange: '#FFA039',
                green: '#3BCB69',
                blue: '#3B90C3',
                purple: '#7D11CD',
                pink: '#DC72FF'
            },
            field: {
                backgroundColor: '#EBE7DC',
                defaultColor: '#333333',
                borderColor: '#ACAC9D',
                deathMatchColor: '#333333',
            },
            player: {
                superpowerColor: '#C8C8B6',
            }
        },
        dark: {
            players: {
                red: '#FF0000',
                orange: '#FFA500',
                green: '#7CFC00',
                blue: '#1E90FF',
                purple: '#9370DB',
                pink: '#FF1493'
            },
            field: {
                backgroundColor: '#222222',
                defaultColor: '#DDDDDD',
                borderColor: '#999999',
                deathMatchColor: '#DDDDDD',
            },
            player: {
                superpowerColor: '#666666',
            }
        }
    }

};