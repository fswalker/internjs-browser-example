var Legacy = window.legacy || {};

Legacy.hello = function () { return 'Never use such legacy approach for modules!'; }

Legacy.getMagicDate = function () { return moment('2018-07-05').format('YYYY-MM-DD'); }
