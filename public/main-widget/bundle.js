(() => {
  var e = {
      463: (e, t, n) => {
        const r = n(411);
        (e.exports = function (e) {
          if ('string' != typeof e) return;
          const t = e.toUpperCase();
          return Object.prototype.hasOwnProperty.call(r, t) ? r[t] : void 0;
        }),
          (e.exports.currencySymbolMap = r);
      },
      411: e => {
        e.exports = {
          AED: 'د.إ',
          AFN: '؋',
          ALL: 'L',
          AMD: '֏',
          ANG: 'ƒ',
          AOA: 'Kz',
          ARS: '$',
          AUD: '$',
          AWG: 'ƒ',
          AZN: '₼',
          BAM: 'KM',
          BBD: '$',
          BDT: '৳',
          BGN: 'лв',
          BHD: '.د.ب',
          BIF: 'FBu',
          BMD: '$',
          BND: '$',
          BOB: '$b',
          BOV: 'BOV',
          BRL: 'R$',
          BSD: '$',
          BTC: '₿',
          BTN: 'Nu.',
          BWP: 'P',
          BYN: 'Br',
          BYR: 'Br',
          BZD: 'BZ$',
          CAD: '$',
          CDF: 'FC',
          CHE: 'CHE',
          CHF: 'CHF',
          CHW: 'CHW',
          CLF: 'CLF',
          CLP: '$',
          CNY: '¥',
          COP: '$',
          COU: 'COU',
          CRC: '₡',
          CUC: '$',
          CUP: '₱',
          CVE: '$',
          CZK: 'Kč',
          DJF: 'Fdj',
          DKK: 'kr',
          DOP: 'RD$',
          DZD: 'دج',
          EEK: 'kr',
          EGP: '£',
          ERN: 'Nfk',
          ETB: 'Br',
          ETH: 'Ξ',
          EUR: '€',
          FJD: '$',
          FKP: '£',
          GBP: '£',
          GEL: '₾',
          GGP: '£',
          GHC: '₵',
          GHS: 'GH₵',
          GIP: '£',
          GMD: 'D',
          GNF: 'FG',
          GTQ: 'Q',
          GYD: '$',
          HKD: '$',
          HNL: 'L',
          HRK: 'kn',
          HTG: 'G',
          HUF: 'Ft',
          IDR: 'Rp',
          ILS: '₪',
          IMP: '£',
          INR: '₹',
          IQD: 'ع.د',
          IRR: '﷼',
          ISK: 'kr',
          JEP: '£',
          JMD: 'J$',
          JOD: 'JD',
          JPY: '¥',
          KES: 'KSh',
          KGS: 'лв',
          KHR: '៛',
          KMF: 'CF',
          KPW: '₩',
          KRW: '₩',
          KWD: 'KD',
          KYD: '$',
          KZT: '₸',
          LAK: '₭',
          LBP: '£',
          LKR: '₨',
          LRD: '$',
          LSL: 'M',
          LTC: 'Ł',
          LTL: 'Lt',
          LVL: 'Ls',
          LYD: 'LD',
          MAD: 'MAD',
          MDL: 'lei',
          MGA: 'Ar',
          MKD: 'ден',
          MMK: 'K',
          MNT: '₮',
          MOP: 'MOP$',
          MRO: 'UM',
          MRU: 'UM',
          MUR: '₨',
          MVR: 'Rf',
          MWK: 'MK',
          MXN: '$',
          MXV: 'MXV',
          MYR: 'RM',
          MZN: 'MT',
          NAD: '$',
          NGN: '₦',
          NIO: 'C$',
          NOK: 'kr',
          NPR: '₨',
          NZD: '$',
          OMR: '﷼',
          PAB: 'B/.',
          PEN: 'S/.',
          PGK: 'K',
          PHP: '₱',
          PKR: '₨',
          PLN: 'zł',
          PYG: 'Gs',
          QAR: '﷼',
          RMB: '￥',
          RON: 'lei',
          RSD: 'Дин.',
          RUB: '₽',
          RWF: 'R₣',
          SAR: '﷼',
          SBD: '$',
          SCR: '₨',
          SDG: 'ج.س.',
          SEK: 'kr',
          SGD: 'S$',
          SHP: '£',
          SLL: 'Le',
          SOS: 'S',
          SRD: '$',
          SSP: '£',
          STD: 'Db',
          STN: 'Db',
          SVC: '$',
          SYP: '£',
          SZL: 'E',
          THB: '฿',
          TJS: 'SM',
          TMT: 'T',
          TND: 'د.ت',
          TOP: 'T$',
          TRL: '₤',
          TRY: '₺',
          TTD: 'TT$',
          TVD: '$',
          TWD: 'NT$',
          TZS: 'TSh',
          UAH: '₴',
          UGX: 'USh',
          USD: '$',
          UYI: 'UYI',
          UYU: '$U',
          UYW: 'UYW',
          UZS: 'лв',
          VEF: 'Bs',
          VES: 'Bs.S',
          VND: '₫',
          VUV: 'VT',
          WST: 'WS$',
          XAF: 'FCFA',
          XBT: 'Ƀ',
          XCD: '$',
          XOF: 'CFA',
          XPF: '₣',
          XSU: 'Sucre',
          XUA: 'XUA',
          YER: '﷼',
          ZAR: 'R',
          ZMW: 'ZK',
          ZWD: 'Z$',
          ZWL: '$',
        };
      },
      20: e => {
        'use strict';
        var t = '%[a-f0-9]{2}',
          n = new RegExp(t, 'gi'),
          r = new RegExp('(' + t + ')+', 'gi');
        function o(e, t) {
          try {
            return decodeURIComponent(e.join(''));
          } catch (e) {}
          if (1 === e.length) return e;
          t = t || 1;
          var n = e.slice(0, t),
            r = e.slice(t);
          return Array.prototype.concat.call([], o(n), o(r));
        }
        function i(e) {
          try {
            return decodeURIComponent(e);
          } catch (i) {
            for (var t = e.match(n), r = 1; r < t.length; r++)
              t = (e = o(t, r).join('')).match(n);
            return e;
          }
        }
        e.exports = function (e) {
          if ('string' != typeof e)
            throw new TypeError(
              'Expected `encodedURI` to be of type `string`, got `' +
                typeof e +
                '`'
            );
          try {
            return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
          } catch (t) {
            return (function (e) {
              for (
                var t = { '%FE%FF': '��', '%FF%FE': '��' }, n = r.exec(e);
                n;

              ) {
                try {
                  t[n[0]] = decodeURIComponent(n[0]);
                } catch (e) {
                  var o = i(n[0]);
                  o !== n[0] && (t[n[0]] = o);
                }
                n = r.exec(e);
              }
              t['%C2'] = '�';
              for (var a = Object.keys(t), s = 0; s < a.length; s++) {
                var l = a[s];
                e = e.replace(new RegExp(l, 'g'), t[l]);
              }
              return e;
            })(e);
          }
        };
      },
      148: e => {
        'use strict';
        const t = new WeakMap(),
          n = new WeakMap(),
          r = new WeakMap(),
          o = Symbol('anyProducer'),
          i = Promise.resolve(),
          a = Symbol('listenerAdded'),
          s = Symbol('listenerRemoved');
        let l = !1;
        function c(e) {
          if ('string' != typeof e && 'symbol' != typeof e)
            throw new TypeError('eventName must be a string or a symbol');
        }
        function d(e) {
          if ('function' != typeof e)
            throw new TypeError('listener must be a function');
        }
        function p(e, t) {
          const r = n.get(e);
          return r.has(t) || r.set(t, new Set()), r.get(t);
        }
        function u(e, t) {
          const n = 'string' == typeof t || 'symbol' == typeof t ? t : o,
            i = r.get(e);
          return i.has(n) || i.set(n, new Set()), i.get(n);
        }
        function m(e, t) {
          t = Array.isArray(t) ? t : [t];
          let n = !1,
            r = () => {},
            o = [];
          const i = {
            enqueue(e) {
              o.push(e), r();
            },
            finish() {
              (n = !0), r();
            },
          };
          for (const n of t) u(e, n).add(i);
          return {
            async next() {
              return o
                ? 0 === o.length
                  ? n
                    ? ((o = void 0), this.next())
                    : (await new Promise(e => {
                        r = e;
                      }),
                      this.next())
                  : { done: !1, value: await o.shift() }
                : { done: !0 };
            },
            async return(n) {
              o = void 0;
              for (const n of t) u(e, n).delete(i);
              return (
                r(),
                arguments.length > 0
                  ? { done: !0, value: await n }
                  : { done: !0 }
              );
            },
            [Symbol.asyncIterator]() {
              return this;
            },
          };
        }
        function f(e) {
          if (void 0 === e) return g;
          if (!Array.isArray(e))
            throw new TypeError('`methodNames` must be an array of strings');
          for (const t of e)
            if (!g.includes(t)) {
              if ('string' != typeof t)
                throw new TypeError('`methodNames` element must be a string');
              throw new Error(`${t} is not Emittery method`);
            }
          return e;
        }
        const h = e => e === a || e === s;
        class y {
          static mixin(e, t) {
            return (
              (t = f(t)),
              n => {
                if ('function' != typeof n)
                  throw new TypeError('`target` must be function');
                for (const e of t)
                  if (void 0 !== n.prototype[e])
                    throw new Error(
                      `The property \`${e}\` already exists on \`target\``
                    );
                Object.defineProperty(n.prototype, e, {
                  enumerable: !1,
                  get: function () {
                    return (
                      Object.defineProperty(this, e, {
                        enumerable: !1,
                        value: new y(),
                      }),
                      this[e]
                    );
                  },
                });
                const r = t =>
                  function (...n) {
                    return this[e][t](...n);
                  };
                for (const e of t)
                  Object.defineProperty(n.prototype, e, {
                    enumerable: !1,
                    value: r(e),
                  });
                return n;
              }
            );
          }
          static get isDebugEnabled() {
            if ('object' != typeof process) return l;
            const { env: e } = process || { env: {} };
            return 'emittery' === e.DEBUG || '*' === e.DEBUG || l;
          }
          static set isDebugEnabled(e) {
            l = e;
          }
          constructor(e = {}) {
            t.set(this, new Set()),
              n.set(this, new Map()),
              r.set(this, new Map()),
              (this.debug = e.debug || {}),
              void 0 === this.debug.enabled && (this.debug.enabled = !1),
              this.debug.logger ||
                (this.debug.logger = (e, t, n, r) => {
                  try {
                    r = JSON.stringify(r);
                  } catch {
                    r = `Object with the following keys failed to stringify: ${Object.keys(
                      r
                    ).join(',')}`;
                  }
                  'symbol' == typeof n && (n = n.toString());
                  const o = new Date(),
                    i = `${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}.${o.getMilliseconds()}`;
                  console.log(
                    `[${i}][emittery:${e}][${t}] Event Name: ${n}\n\tdata: ${r}`
                  );
                });
          }
          logIfDebugEnabled(e, t, n) {
            (y.isDebugEnabled || this.debug.enabled) &&
              this.debug.logger(e, this.debug.name, t, n);
          }
          on(e, t) {
            d(t), (e = Array.isArray(e) ? e : [e]);
            for (const n of e)
              c(n),
                p(this, n).add(t),
                this.logIfDebugEnabled('subscribe', n, void 0),
                h(n) || this.emit(a, { eventName: n, listener: t });
            return this.off.bind(this, e, t);
          }
          off(e, t) {
            d(t), (e = Array.isArray(e) ? e : [e]);
            for (const n of e)
              c(n),
                p(this, n).delete(t),
                this.logIfDebugEnabled('unsubscribe', n, void 0),
                h(n) || this.emit(s, { eventName: n, listener: t });
          }
          once(e) {
            return new Promise(t => {
              const n = this.on(e, e => {
                n(), t(e);
              });
            });
          }
          events(e) {
            e = Array.isArray(e) ? e : [e];
            for (const t of e) c(t);
            return m(this, e);
          }
          async emit(e, n) {
            c(e),
              this.logIfDebugEnabled('emit', e, n),
              (function (e, t, n) {
                const i = r.get(e);
                if (i.has(t)) for (const e of i.get(t)) e.enqueue(n);
                if (i.has(o)) {
                  const e = Promise.all([t, n]);
                  for (const t of i.get(o)) t.enqueue(e);
                }
              })(this, e, n);
            const a = p(this, e),
              s = t.get(this),
              l = [...a],
              d = h(e) ? [] : [...s];
            await i,
              await Promise.all([
                ...l.map(async e => {
                  if (a.has(e)) return e(n);
                }),
                ...d.map(async t => {
                  if (s.has(t)) return t(e, n);
                }),
              ]);
          }
          async emitSerial(e, n) {
            c(e), this.logIfDebugEnabled('emitSerial', e, n);
            const r = p(this, e),
              o = t.get(this),
              a = [...r],
              s = [...o];
            await i;
            for (const e of a) r.has(e) && (await e(n));
            for (const t of s) o.has(t) && (await t(e, n));
          }
          onAny(e) {
            return (
              d(e),
              this.logIfDebugEnabled('subscribeAny', void 0, void 0),
              t.get(this).add(e),
              this.emit(a, { listener: e }),
              this.offAny.bind(this, e)
            );
          }
          anyEvent() {
            return m(this);
          }
          offAny(e) {
            d(e),
              this.logIfDebugEnabled('unsubscribeAny', void 0, void 0),
              this.emit(s, { listener: e }),
              t.get(this).delete(e);
          }
          clearListeners(e) {
            e = Array.isArray(e) ? e : [e];
            for (const o of e)
              if (
                (this.logIfDebugEnabled('clear', o, void 0),
                'string' == typeof o || 'symbol' == typeof o)
              ) {
                p(this, o).clear();
                const e = u(this, o);
                for (const t of e) t.finish();
                e.clear();
              } else {
                t.get(this).clear();
                for (const e of n.get(this).values()) e.clear();
                for (const e of r.get(this).values()) {
                  for (const t of e) t.finish();
                  e.clear();
                }
              }
          }
          listenerCount(e) {
            e = Array.isArray(e) ? e : [e];
            let o = 0;
            for (const i of e)
              if ('string' != typeof i) {
                void 0 !== i && c(i), (o += t.get(this).size);
                for (const e of n.get(this).values()) o += e.size;
                for (const e of r.get(this).values()) o += e.size;
              } else
                o +=
                  t.get(this).size +
                  p(this, i).size +
                  u(this, i).size +
                  u(this).size;
            return o;
          }
          bindMethods(e, t) {
            if ('object' != typeof e || null === e)
              throw new TypeError('`target` must be an object');
            t = f(t);
            for (const n of t) {
              if (void 0 !== e[n])
                throw new Error(
                  `The property \`${n}\` already exists on \`target\``
                );
              Object.defineProperty(e, n, {
                enumerable: !1,
                value: this[n].bind(this),
              });
            }
          }
        }
        const g = Object.getOwnPropertyNames(y.prototype).filter(
          e => 'constructor' !== e
        );
        Object.defineProperty(y, 'listenerAdded', {
          value: a,
          writable: !1,
          enumerable: !0,
          configurable: !1,
        }),
          Object.defineProperty(y, 'listenerRemoved', {
            value: s,
            writable: !1,
            enumerable: !0,
            configurable: !1,
          }),
          (e.exports = y);
      },
      806: e => {
        'use strict';
        e.exports = function (e, t) {
          for (
            var n = {}, r = Object.keys(e), o = Array.isArray(t), i = 0;
            i < r.length;
            i++
          ) {
            var a = r[i],
              s = e[a];
            (o ? -1 !== t.indexOf(a) : t(a, s, e)) && (n[a] = s);
          }
          return n;
        };
      },
      563: (e, t, n) => {
        'use strict';
        const r = n(610),
          o = n(20),
          i = n(500),
          a = n(806),
          s = Symbol('encodeFragmentIdentifier');
        function l(e) {
          if ('string' != typeof e || 1 !== e.length)
            throw new TypeError(
              'arrayFormatSeparator must be single character string'
            );
        }
        function c(e, t) {
          return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
        }
        function d(e, t) {
          return t.decode ? o(e) : e;
        }
        function p(e) {
          return Array.isArray(e)
            ? e.sort()
            : 'object' == typeof e
            ? p(Object.keys(e))
                .sort((e, t) => Number(e) - Number(t))
                .map(t => e[t])
            : e;
        }
        function u(e) {
          const t = e.indexOf('#');
          return -1 !== t && (e = e.slice(0, t)), e;
        }
        function m(e) {
          const t = (e = u(e)).indexOf('?');
          return -1 === t ? '' : e.slice(t + 1);
        }
        function f(e, t) {
          return (
            t.parseNumbers &&
            !Number.isNaN(Number(e)) &&
            'string' == typeof e &&
            '' !== e.trim()
              ? (e = Number(e))
              : !t.parseBooleans ||
                null === e ||
                ('true' !== e.toLowerCase() && 'false' !== e.toLowerCase()) ||
                (e = 'true' === e.toLowerCase()),
            e
          );
        }
        function h(e, t) {
          l(
            (t = Object.assign(
              {
                decode: !0,
                sort: !0,
                arrayFormat: 'none',
                arrayFormatSeparator: ',',
                parseNumbers: !1,
                parseBooleans: !1,
              },
              t
            )).arrayFormatSeparator
          );
          const n = (function (e) {
              let t;
              switch (e.arrayFormat) {
                case 'index':
                  return (e, n, r) => {
                    (t = /\[(\d*)\]$/.exec(e)),
                      (e = e.replace(/\[\d*\]$/, '')),
                      t
                        ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n))
                        : (r[e] = n);
                  };
                case 'bracket':
                  return (e, n, r) => {
                    (t = /(\[\])$/.exec(e)),
                      (e = e.replace(/\[\]$/, '')),
                      t
                        ? void 0 !== r[e]
                          ? (r[e] = [].concat(r[e], n))
                          : (r[e] = [n])
                        : (r[e] = n);
                  };
                case 'colon-list-separator':
                  return (e, n, r) => {
                    (t = /(:list)$/.exec(e)),
                      (e = e.replace(/:list$/, '')),
                      t
                        ? void 0 !== r[e]
                          ? (r[e] = [].concat(r[e], n))
                          : (r[e] = [n])
                        : (r[e] = n);
                  };
                case 'comma':
                case 'separator':
                  return (t, n, r) => {
                    const o =
                        'string' == typeof n &&
                        n.includes(e.arrayFormatSeparator),
                      i =
                        'string' == typeof n &&
                        !o &&
                        d(n, e).includes(e.arrayFormatSeparator);
                    n = i ? d(n, e) : n;
                    const a =
                      o || i
                        ? n.split(e.arrayFormatSeparator).map(t => d(t, e))
                        : null === n
                        ? n
                        : d(n, e);
                    r[t] = a;
                  };
                case 'bracket-separator':
                  return (t, n, r) => {
                    const o = /(\[\])$/.test(t);
                    if (((t = t.replace(/\[\]$/, '')), !o))
                      return void (r[t] = n ? d(n, e) : n);
                    const i =
                      null === n
                        ? []
                        : n.split(e.arrayFormatSeparator).map(t => d(t, e));
                    void 0 !== r[t] ? (r[t] = [].concat(r[t], i)) : (r[t] = i);
                  };
                default:
                  return (e, t, n) => {
                    void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                  };
              }
            })(t),
            r = Object.create(null);
          if ('string' != typeof e) return r;
          if (!(e = e.trim().replace(/^[?#&]/, ''))) return r;
          for (const o of e.split('&')) {
            if ('' === o) continue;
            let [e, a] = i(t.decode ? o.replace(/\+/g, ' ') : o, '=');
            (a =
              void 0 === a
                ? null
                : ['comma', 'separator', 'bracket-separator'].includes(
                    t.arrayFormat
                  )
                ? a
                : d(a, t)),
              n(d(e, t), a, r);
          }
          for (const e of Object.keys(r)) {
            const n = r[e];
            if ('object' == typeof n && null !== n)
              for (const e of Object.keys(n)) n[e] = f(n[e], t);
            else r[e] = f(n, t);
          }
          return !1 === t.sort
            ? r
            : (!0 === t.sort
                ? Object.keys(r).sort()
                : Object.keys(r).sort(t.sort)
              ).reduce((e, t) => {
                const n = r[t];
                return (
                  Boolean(n) && 'object' == typeof n && !Array.isArray(n)
                    ? (e[t] = p(n))
                    : (e[t] = n),
                  e
                );
              }, Object.create(null));
        }
        (t.extract = m),
          (t.parse = h),
          (t.stringify = (e, t) => {
            if (!e) return '';
            l(
              (t = Object.assign(
                {
                  encode: !0,
                  strict: !0,
                  arrayFormat: 'none',
                  arrayFormatSeparator: ',',
                },
                t
              )).arrayFormatSeparator
            );
            const n = n =>
                (t.skipNull && null == e[n]) ||
                (t.skipEmptyString && '' === e[n]),
              r = (function (e) {
                switch (e.arrayFormat) {
                  case 'index':
                    return t => (n, r) => {
                      const o = n.length;
                      return void 0 === r ||
                        (e.skipNull && null === r) ||
                        (e.skipEmptyString && '' === r)
                        ? n
                        : null === r
                        ? [...n, [c(t, e), '[', o, ']'].join('')]
                        : [
                            ...n,
                            [c(t, e), '[', c(o, e), ']=', c(r, e)].join(''),
                          ];
                    };
                  case 'bracket':
                    return t => (n, r) =>
                      void 0 === r ||
                      (e.skipNull && null === r) ||
                      (e.skipEmptyString && '' === r)
                        ? n
                        : null === r
                        ? [...n, [c(t, e), '[]'].join('')]
                        : [...n, [c(t, e), '[]=', c(r, e)].join('')];
                  case 'colon-list-separator':
                    return t => (n, r) =>
                      void 0 === r ||
                      (e.skipNull && null === r) ||
                      (e.skipEmptyString && '' === r)
                        ? n
                        : null === r
                        ? [...n, [c(t, e), ':list='].join('')]
                        : [...n, [c(t, e), ':list=', c(r, e)].join('')];
                  case 'comma':
                  case 'separator':
                  case 'bracket-separator': {
                    const t =
                      'bracket-separator' === e.arrayFormat ? '[]=' : '=';
                    return n => (r, o) =>
                      void 0 === o ||
                      (e.skipNull && null === o) ||
                      (e.skipEmptyString && '' === o)
                        ? r
                        : ((o = null === o ? '' : o),
                          0 === r.length
                            ? [[c(n, e), t, c(o, e)].join('')]
                            : [[r, c(o, e)].join(e.arrayFormatSeparator)]);
                  }
                  default:
                    return t => (n, r) =>
                      void 0 === r ||
                      (e.skipNull && null === r) ||
                      (e.skipEmptyString && '' === r)
                        ? n
                        : null === r
                        ? [...n, c(t, e)]
                        : [...n, [c(t, e), '=', c(r, e)].join('')];
                }
              })(t),
              o = {};
            for (const t of Object.keys(e)) n(t) || (o[t] = e[t]);
            const i = Object.keys(o);
            return (
              !1 !== t.sort && i.sort(t.sort),
              i
                .map(n => {
                  const o = e[n];
                  return void 0 === o
                    ? ''
                    : null === o
                    ? c(n, t)
                    : Array.isArray(o)
                    ? 0 === o.length && 'bracket-separator' === t.arrayFormat
                      ? c(n, t) + '[]'
                      : o.reduce(r(n), []).join('&')
                    : c(n, t) + '=' + c(o, t);
                })
                .filter(e => e.length > 0)
                .join('&')
            );
          }),
          (t.parseUrl = (e, t) => {
            t = Object.assign({ decode: !0 }, t);
            const [n, r] = i(e, '#');
            return Object.assign(
              { url: n.split('?')[0] || '', query: h(m(e), t) },
              t && t.parseFragmentIdentifier && r
                ? { fragmentIdentifier: d(r, t) }
                : {}
            );
          }),
          (t.stringifyUrl = (e, n) => {
            n = Object.assign({ encode: !0, strict: !0, [s]: !0 }, n);
            const r = u(e.url).split('?')[0] || '',
              o = t.extract(e.url),
              i = t.parse(o, { sort: !1 }),
              a = Object.assign(i, e.query);
            let l = t.stringify(a, n);
            l && (l = `?${l}`);
            let d = (function (e) {
              let t = '';
              const n = e.indexOf('#');
              return -1 !== n && (t = e.slice(n)), t;
            })(e.url);
            return (
              e.fragmentIdentifier &&
                (d = `#${
                  n[s] ? c(e.fragmentIdentifier, n) : e.fragmentIdentifier
                }`),
              `${r}${l}${d}`
            );
          }),
          (t.pick = (e, n, r) => {
            r = Object.assign({ parseFragmentIdentifier: !0, [s]: !1 }, r);
            const {
              url: o,
              query: i,
              fragmentIdentifier: l,
            } = t.parseUrl(e, r);
            return t.stringifyUrl(
              { url: o, query: a(i, n), fragmentIdentifier: l },
              r
            );
          }),
          (t.exclude = (e, n, r) => {
            const o = Array.isArray(n)
              ? e => !n.includes(e)
              : (e, t) => !n(e, t);
            return t.pick(e, o, r);
          });
      },
      500: e => {
        'use strict';
        e.exports = (e, t) => {
          if ('string' != typeof e || 'string' != typeof t)
            throw new TypeError(
              'Expected the arguments to be of type `string`'
            );
          if ('' === t) return [e];
          const n = e.indexOf(t);
          return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
        };
      },
      610: e => {
        'use strict';
        e.exports = e =>
          encodeURIComponent(e).replace(
            /[!'()*]/g,
            e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
          );
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      'use strict';
      const e = 'https://formpay-home.martechapps.com/',
        t = 'https://formpay.martechapps.com/';
      var r = n(563);
      const o = () => r.parse(window.location.search),
        i = () => {
          let e = sessionStorage.getItem('hbFields');
          return e ? JSON.parse(e) : {};
        };
      function a(e) {
        var t = document.createElement('template');
        return (e = e.trim()), (t.innerHTML = e), t.content.firstChild;
      }
      var s = n(463),
        l = n.n(s);
      class c {
        rootNode = null;
        showRoot = null;
        constructor(e, t) {
          (this.rootContainer = this.addRootNode(e, t)),
            this.addStyleNode().createRootNode();
        }
        showSpinnerForFormFields = () => {
          let e = this.rootContainer.querySelector(
            '#fp-formpay-hubspot-container'
          );
          this.showSpinner(e);
        };
        hideSpinnerForFormFields = () => {
          let e = this.rootContainer.querySelector(
            '#fp-formpay-hubspot-container'
          );
          this.hideSpinner(e);
        };
        addRootNode = (e, t) => {
          let n = e ?? document.querySelector('script[data-name="fp"]');
          return (
            n.parentNode.insertBefore(
              a(
                `\n        <div id="fp-all-container-${t}">\n          <div id="fp-root-formpay-container"></div>\n          <div class="fp-spinner">\n            <div class="fp-progress-bar">\n              <div class="fp-circle fp-border"></div>\n            </div>\n          </div>\n        </div>\n        `
              ),
              n.nextSibling
            ),
            document.querySelector('#fp-root-formpay-container')
          );
        };
        showTestMode = () => (
          this.rootContainer
            .querySelector('.fp-title-text')
            .append(a(' <em class="fp-test-mode">(Test Mode)</em> ')),
          this
        );
        setTitleText = e => (
          (this.rootContainer.querySelector('.fp-title-text').innerHTML = e),
          this
        );
        createRootNode = () => (
          (this.rootContainer.innerHTML =
            '\n      <div class="fp-form-spinner-container">Spinner</div>\n      <div id="fp-root-formpay">\n        <div class="fp-form-title">\n          <span class="fp-title-text">Form</span>\n          <span class="fp-title-right-wrapper">\n            <span class="fp-edit-form-toggle">\n              <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="24" fill="none">\n                <path d="M0 0h24v24H0z" />\n                <path fill="black" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>\n              </svg>\n            </span>\n          </span>\n        </div>\n        <div id="fp-formpay-hubspot-container">\n\n        \n        </div>\n      </div>\n    '),
          (this.rootNode =
            this.rootContainer.querySelector('#fp-root-formpay')),
          this
        );
        addStyleNode = () => {
          var e = document.createElement('style');
          return (
            (e.innerText =
              "\n  .fp-payment-element {\n    text-align: center;\n    margin: 20px auto 0px auto;\n  }\n\n  .fp-edit-form-toggle {\n    cursor: pointer;\n    display: inline-block;\n    height: 20px;\n  }\n\n  .fp-edit-form-toggle path:last-of-type {\n    fill: rgb(0, 183, 255);;\n  }\n\n\n  .fp-edit-form-toggle.disabled path:last-of-type {\n    fill: black;\n  }\n\n  .fp-error-form{\n    display: none;\n    text-align: center;\n    font-size: 14px;\n    color: #FF4842;\n    justify-content: center;\n  }\n\n\n  #fp-root-formpay {\n    font-family: 'arial';\n  }\n\n  .fp-form-title {\n    display: flex;\n    align-items: center;\n    height: 40px;\n    margin-bottom:10px;\n  }\n\n  .fp-form-title .fp-title-right-wrapper {\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n  }\n\n  .fp-title-text{\n    display:flex;\n    align-items:center;\n  }\n\n\n  .fp-test-mode {\n    font-size: 13px;\n    margin-left: 5px;\n    color: #FF4842;\n    padding : 1px\n    \n  }\n\n  .fp-pay-button {\n    width: 100%;\n    height: 40px;\n    background-color: blue;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n    margin-top: 25px;\n    margin-bottom: 25px;\n    border-radius: 3px;\n  }\n  .fp-payment-method-wrapper,\n  .fp-payment-method-wrapper {\n    background-color: #fff;\n    border: solid 1px #ccc;\n    display: flex;\n    align-items: center;\n    border-radius: 4px;\n    padding: 6px 10px;\n    justify-content: space-between;\n    height: 45px;\n  }\n  #fp-adyen-card-element {\n    padding: 15px;\n    border: 1px solid #ccc;\n    margin-top: 15px;\n    border-radius: 5px;\n    background-color: #f5f4f4;\n  }\n  .fp-payment-method-wrapper {\n    justify-content: flex-start;\n    margin-top: 15px;\n  }\n  .fp-amazon-pay-button-wrapper {\n    padding: 22px 35px;\n    display: flex;\n    justify-content: center;\n    margin-top: 15px;\n    border: solid 1px #ccc;\n    display: none;\n    border-radius: 5px;\n  }\n  .fp-amazon-pay-button-wrapper.collapsible--open {\n    display: flex;\n  }\n  #fp-adyen-card-element .adyen-checkout__label span {\n    margin-bottom: 12px !important;\n  }\n  .fp-payment-method-wrapper .fp-method-label {\n    justify-content: space-between;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    font-weight: 100;\n    font-size: 16px;\n    color: #33475b;\n    margin-left: 8px;\n    width: 100%;\n    text-align: left;\n  }\n\n  .fp-method-label .fp-method-logo {\n    \n  }\n\n  .fp-spinner {\n    position: relative;\n    min-height: 300px;\n    display: none;\n    align-items: center;\n    justify-content: center;\n  }\n  .collapsible__content {\n    max-height: 0;\n    opacity: 0;\n    overflow: hidden;\n    transition: max-height 1s, opacity 1s;\n  }\n\n  .collapsible--open .collapsible__content {\n    max-height: 500px;\n    opacity: 1;\n  }\n\n  #fp-root-formpay {\n    display: none;\n    padding:30px;\n  }\n\n  .fp-progress-bar {\n    position: relative;\n    width: 30px;\n    height: 30px;\n  }\n\n  .fp-circle {\n    height: 100%;\n    right: 0px;\n    position: absolute;\n    border: solid 3px #ff7a59;\n    border-top-color: white;\n    border-radius: 50%;\n  }\n\n  .fp-border {\n    width: 100%;\n    transform: rotate(135deg);\n    animation: spin 1s steps(2) 0.2s infinite;\n    -webkit-animation: spin 1s linear infinite;\n  }\n\n  @-webkit-keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n\n\n  .fp-thanku-wrapper {\n      padding : 40px 0px;\n      font-family: 'arial';    \n      height: 100%;\n  }\n\n  .fp-thanku-wrapper img {\n    height: 230px;\n    width: 255px;\n    margin: 0 auto;\n    display: block;\n  }\n\n\n  .fp-thanku-heaader {\n      display: flex;\n      justify-content: space-between;\n      padding: 0px 15px;\n  }\n  .fp-thanku-heaader ul {\n      display: flex;\n      padding: 0;\n      margin: 0;\n      list-style: none;\n  }\n  .fp-thanku-heaader ul li {\n      padding: 0px 10px;\n  }\n  .fp-thanku-heaader ul li {\n      text-decoration: none;\n  }\n  .fp-thanku-heaader h2 {\n      margin: 0;\n  }\n  .fp-thanku-widget h4 {\n      \n      margin: 0;\n      font-size: 18px;\n  }\n  .fp-thanku-widget h5 {\n      margin: 0;\n      color: #3deb52;\n      font-size: 18px;\n  }\n  .fp-thanku-widget {\n      margin-top : 20px;\n      text-align: center;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      height: 95%;\n  }\n\n  .fp-order-summary {\n    // font-family: Arial, Helvetica, sans-serif;\n  }\n\n  .fp-order-summary h5 {\n    margin : 13px 0px 13px 0px;\n  }\n  .fp-order-summary .fp-summary-details {\n    font-weight: 100;\n    font-size: 14px;\n    color: gray;\n    padding-bottom: 20px;\n    border-bottom: 1px solid #ccc;\n  }\n\n  .fp-summary-details div {\n    display: flex;\n    justify-content: space-between;\n    margin : 7px 0px 7px 0px;\n  }\n\n  .fp-summary-details .fp-amount {\n    color: #212B36;\n  }\n\n  .fp-order-summary .fp-order-total {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n  }\n  .fp-order-summary .fp-final-total {\n    color: #2196F3\n    ;\n  }\n"),
            document.head.appendChild(e),
            this
          );
        };
        showSpinner = e => {
          (e.innerHTML = document.querySelector('.fp-spinner').outerHTML),
            (e.querySelector('.fp-spinner').style.display = 'flex');
        };
        hideSpinner = e => e.querySelector('.fp-spinner').remove();
        setFormNode = e => ((this.formNode = e), this);
        showFullFormSpinner = () => {
          this.showSpinner(this.rootNode);
        };
        hideFullFormSpinner = () => {
          this.hideSpinner(this.rootNode);
        };
        editToggleDisabled = () => {
          this.rootContainer
            .querySelector('.fp-edit-form-toggle')
            .classList.add('disabled');
        };
        editToggleEnabled = () => {
          this.rootContainer
            .querySelector('.fp-edit-form-toggle')
            .classList.remove('disabled');
        };
        getNewAmazonContainer = (e = 'fp-amazon-pay-container') => {
          if (!document.querySelector('#' + e)) {
            const t = document.createElement('div');
            return (
              (t.innerHTML =
                '\n      <div class="fp-payment-method-wrapper">\n        <input id="fp-amazon-pay-checkbox" type=\'radio\'  name="fp-payment-select" class=\'fp-payment-select\' data-method="amazon-pay" disabled></input>\n        <label for="fp-amazon-pay-checkbox"  class="fp-method-label">\n          <span class="fp-payment-title">\n            Amazon Pay\n          </span> \n          <div class="fp-payment-logo" style="margin-top: 10px;"> \n            <img src="https://formpay.martechapps.com//main-widget/icons/amazon-pay-logo.svg" alt="amazon-logo" />\n          </div>\n        </label>\n      </div>\n      <div class="fp-amazon-pay-button-wrapper">\n        <div id=\'fp-amazon-pay-button\' class="collapsible__content">HEllo</div>\n      </div>\n      '),
              t.setAttribute('id', e),
              t.setAttribute('class', 'fp-payment-element'),
              this.rootNode.appendChild(t),
              t.querySelector('#fp-amazon-pay-button')
            );
          }
          throw new Error(e + ' Node already exits');
        };
        getNewAdyenContainer = (e = 'fp-adyen-card-container') => {
          if (!document.querySelector('#' + e)) {
            const n = document.createElement('div');
            return (
              (n.innerHTML = `\n      <div class="fp-payment-method-wrapper">\n        <input id="fp-adyen-card-checkbox" type='radio' name="fp-payment-select" class='fp-payment-select' data-method="adyen-card" disabled>\n        </input>\n        <label for="fp-adyen-card-checkbox" class="fp-method-label" >\n          <span class="fp-payment-title">\n          Pay Via Card\n          </span> \n          <div class="fp-payment-logo"> \n            <img src="${t}/main-widget/icons/cards-logo-adyen.png" style="display: block;\n            width: 72%;\n            height: 26px;\n            margin-left: auto;"/>\n          </div>\n        </label>\n      </div>\n      <div id='fp-adyen-card-element' class="collapsible__content"></div>\n      `),
              n.setAttribute('id', e),
              n.setAttribute('class', e + ' fp-payment-element'),
              this.rootNode.appendChild(n),
              n.querySelector('#fp-adyen-card-element')
            );
          }
          throw new Error(e + ' Node already exits');
        };
        addPaymentButtonContainer = (e = 'fp-pay-button') => {
          if (!document.querySelector('#' + e)) {
            const t = document.createElement('div');
            return (
              t.setAttribute('id', e),
              t.setAttribute('class', 'fp-pay-button'),
              (t.innerHTML = 'Checkout'),
              this.rootNode.appendChild(t),
              t
            );
          }
          throw new Error(e + ' Node already exits');
        };
        showForm = () => {
          this.rootContainer.querySelector('#fp-root-formpay').style.display =
            'block';
        };
        hideForm = () => {
          this.rootContainer.querySelector('#fp-root-formpay').style.display =
            'none';
        };
        showSpinnerAndHideForm = () => {
          this.hideForm(),
            this.showSpinner(
              this.rootContainer.querySelector('.fp-form-spinner-container')
            );
        };
        hideSpinnerAndShowForm = () => {
          this.hideSpinner(
            this.rootContainer.querySelector('.fp-form-spinner-container')
          ),
            this.showForm(
              this.rootContainer.querySelector('.fp-form-spinner-container')
            );
        };
        showFormSubmitted = () => {
          this.rootContainer.innerHTML =
            '\n      <div class="fp-thanku-wrapper">\n        <image  width="500" height="500" src="https://formpay.martechapps.com//main-widget/images/thank-you-image.png"/>\n        <div class="fp-thanku-widget">\n            <h4>Thank you!</h4>\n            <h5>Payment Done successfully</h5>\n            <p>Thanks for choosing us. Enjoy your products! <br> We hope to see soon back here</p>\n        </div>\n     </div>\n    ';
        };
        addTotalsContainer = e => {
          this.rootContainer
            .querySelector('#fp-root-formpay')
            .insertBefore(
              a(
                `\n      <div class="fp-order-summary" style="">\n        <h5 class="fp-summary-title">Order Summary</h5>\n        <div class="fp-summary-details">\n          <div class="subtotal"><span>Subtotal</span><span class="fp-amount">${l()(
                  e.selected_gateways[0].settings.payment_currency
                )}${
                  e.payment_settings.amount
                }</span></div>\n        </div>\n\n        <div class="fp-order-total">\n          <h5>Total</h5>\n          <span class="fp-final-total">${l()(
                  e.selected_gateways[0].settings.payment_currency
                )}${
                  e.payment_settings.amount
                }</span>\n        </div>\n        <div class="fp-error-form">\n         <img src="${t}/main-widget/icons/error-icon.svg"/> \n         <span class="fp-error-desc">There was an error in your payment</span>\n        </div>\n      </div>\n      `
              ),
              this.rootContainer.querySelector('.fp-payment-element')
            );
        };
        showError = e => {
          let t = this.rootContainer.querySelector('.fp-error-desc');
          (t.innerHTML = e), (t.parentNode.style.display = 'flex'), t.focus();
        };
        showFullFormError = e => {
          (this.rootContainer.innerHTML = ''),
            this.rootContainer.append(
              a(`\n      <div class="fp-error-form">${e}</div>\n    `)
            );
        };
        hideError = () => {
          this.rootContainer.querySelector('.fp-error-form').style.display =
            'none';
        };
      }
      const d = (e, t) =>
        new Promise((n, r) => {
          let o = document.createElement('script');
          (o.type = 'application/javascript'),
            (o.src = e),
            document.body.appendChild(o),
            (o.onload = () => {
              (window[t] = !0), n();
            }),
            (o.onerror = r);
        });
      class p {
        constructor(e, t) {
          (this.formReadyCallback = t),
            (this.options = e),
            (this.containerName = 'fp-formpay-hubspot-container'),
            (this.form = null),
            (this.formHasValidData = !1);
        }
        submit = function (e) {};
        init = async function () {
          try {
            await d('https://js.hsforms.net/forms/v2.js', 'hubspotJs'),
              this.render();
          } catch (e) {
            console.log('Loading Script error', e);
          }
        };
        render = function () {
          var e = {
            portalId: this.options.portalId,
            formId: this.options.formId,
            target: '#' + this.containerName,
            onFormSubmit: function () {
              return !1;
            },
          };
          (this.form = hbspt.forms.create.bind(window)(e)),
            this.form.onReady(this.formReadyCallback);
        };
        doesFormContainFileFields = function (e) {};
        validateForm = async () => {
          const [e, t] = await this.getFormValidityState();
          return (
            this.validationContext.validateForm().then(e => {
              this.validationContext.setState({
                formValidity: t,
                domFields: this.validationContext.getDomFields(),
                submitting: !1,
              });
            }),
            [e, t]
          );
        };
        getFormValidityState = async () => {
          let e = !0,
            t = {};
          const n = await this.validationContext.validateForm();
          return (
            hubspot.utils.map(n, function (n) {
              (t[n.name] = {
                valid: n.valid,
                errors: n.messages ? n.messages : [],
                errorTypes: n.errorTypes ? n.errorTypes : [],
              }),
                (e = n.valid && e);
            }),
            (this.formHasValidData = e),
            [e, t]
          );
        };
        serializeForm = function () {};
        getThankYouMessage = function () {
          return this.form._getComponent().props.inlineMessage || '';
        };
        doesCaptchaExist = function () {};
        showForm = function () {
          document.querySelector('#' + this.containerName),
            element && (element.style.display = 'initial');
        };
        hideForm = function () {
          var e = document.querySelector('#' + this.containerName);
          e && (e.style.display = 'none');
        };
        getDomNode = () => this.form._getComponent().getDOMNode();
        hideSubmitButton = () => (
          (this.getDomNode().querySelector('.hs-submit').style.display =
            'none'),
          this
        );
        setDomNode = () => (
          (this.formNode = this.form._getComponent().getDOMNode()), this
        );
        triggerWatch = () => {
          const e = {},
            t = this.validationContext.getFieldGroups(),
            n =
              window.domHelper.rootContainer.querySelector(
                'iframe'
              ).contentDocument;
          return (
            t.map((t, r) => {
              Array.isArray(t.fields)
                ? t.fields.map((t, r) => {
                    'string' === t.type &&
                      n
                        .querySelectorAll("input[name='" + t.name + "']")
                        .forEach(r =>
                          r.addEventListener('change', async () => {
                            const r = t.name,
                              o = n.querySelector(
                                'input[name="' + t.name + '"]'
                              ).value;
                            (e[r] = o),
                              sessionStorage.setItem(
                                'hbFields',
                                JSON.stringify(e)
                              );
                          })
                        ),
                      'checkbox' === t.fieldType &&
                        n
                          .querySelectorAll("input[name='" + t.name + "']")
                          .forEach(r =>
                            r.addEventListener('change', async () => {
                              const r = t.name,
                                o = [];
                              n
                                .querySelectorAll(
                                  'input[name="' + t.name + '"]:checked'
                                )
                                .forEach(function (e) {
                                  o.push(e.value);
                                }),
                                (e[r] = o),
                                sessionStorage.setItem(
                                  'hbFields',
                                  JSON.stringify(e)
                                );
                            })
                          ),
                      'select' === t.fieldType &&
                        n
                          .querySelectorAll("select[name='" + t.name + "']")
                          .forEach(r =>
                            r.addEventListener('change', async () => {
                              const r = t.name,
                                o = (e[t.name] = n.querySelector(
                                  'select[name="' + t.name + '"]'
                                ).value);
                              (e[r] = o),
                                sessionStorage.setItem(
                                  'hbFields',
                                  JSON.stringify(e)
                                );
                            })
                          );
                  })
                : ('string' === t.fields[0].type &&
                    n
                      .querySelectorAll(
                        "input[name='" + t.fields[0].name + "']"
                      )
                      .forEach(r =>
                        r.addEventListener('change', async () => {
                          const r = t.fields[0].name,
                            o = n.querySelector(
                              'input[name="' + t.fields[0].name + '"]'
                            ).value;
                          (e[r] = o),
                            sessionStorage.setItem(
                              'hbFields',
                              JSON.stringify(e)
                            );
                        })
                      ),
                  'checkbox' === t.fields[0].fieldType &&
                    n
                      .querySelectorAll(
                        "input[name='" + t.fields[0].name + "']"
                      )
                      .forEach(r =>
                        r.addEventListener('change', async () => {
                          const r = t.fields[0].name,
                            o = [];
                          n
                            .querySelectorAll(
                              'input[name="' + t.fields[0].name + '"]:checked'
                            )
                            .forEach(function (e) {
                              o.push(e.value);
                            }),
                            (e[r] = o),
                            sessionStorage.setItem(
                              'hbFields',
                              JSON.stringify(e)
                            );
                        })
                      ),
                  'select' === t.fields[0].fieldType &&
                    n
                      .querySelectorAll(
                        "select[name='" + t.fields[0].name + "']"
                      )
                      .forEach(r =>
                        r.addEventListener('change', async () => {
                          const r = t.fields[0].name,
                            o = n.querySelector(
                              'select[name="' + t.fields[0].name + '"]'
                            ).value;
                          (e[r] = o),
                            sessionStorage.setItem(
                              'hbFields',
                              JSON.stringify(e)
                            );
                        })
                      ));
            }),
            this
          );
        };
        saveContext = () => (
          (this.validationContext = window.HSFR.FORM_COMPONENTS.find(
            function (e) {
              return e.props.formId === this.form.id;
            }.bind(this)
          )),
          this
        );
        disableHubspotForm = () => {
          this.disabled = !0;
          const e =
            window.domHelper.rootContainer.querySelector(
              'iframe'
            ).contentDocument;
          return (
            e
              .querySelectorAll('input')
              .forEach(e => e.setAttribute('disabled', !0)),
            e
              .querySelectorAll('select')
              .forEach(e => e.setAttribute('disabled', !0)),
            this
          );
        };
        enableHubspotForm = () => {
          this.disabled = !1;
          const e =
            window.domHelper.rootContainer.querySelector(
              'iframe'
            ).contentDocument;
          return (
            e
              .querySelectorAll('input')
              .forEach(e => e.removeAttribute('disabled')),
            e
              .querySelectorAll('select')
              .forEach(e => e.removeAttribute('disabled')),
            this
          );
        };
        focusErrorElements = e => {
          for (let t in e)
            if (!e[t].valid) {
              this.formNode
                .querySelector('#' + t + '-' + this.options.formId)
                .focus();
              break;
            }
          return this;
        };
      }
      function u(e, t) {
        return fetch(
          e,
          (function (e) {
            const t = { ...e };
            return (
              sessionStorage.getItem('paymentToken') &&
                (t.headers = {
                  ...t.headers,
                  'fp-payment-token': sessionStorage.getItem('paymentToken'),
                }),
              t
            );
          })(t)
        );
      }
      var m,
        f = function (e, t, n) {
          void 0 === n && (n = 'test'),
            (this.getRedirectURIInitial = function () {
              return (
                window.location.href +
                ((e = window.location.href),
                new RegExp(/(\?.*)$/).test(e) ? '&' : '?&')
              );
              var e;
            }),
            (this.container = this.container =
              'string' == typeof e ? e : e.getAttribute('id')),
            (this.paymentDetails = t),
            (this.mode = n);
        },
        h =
          ((m = function (e, t) {
            return (
              (m =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              m(e, t)
            );
          }),
          function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Class extends value ' +
                  String(t) +
                  ' is not a constructor or null'
              );
            function n() {
              this.constructor = e;
            }
            m(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        y = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                l(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        },
        g = function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (o = (o = a.trys).length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0])
                          )
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        },
        w = (function (t) {
          function n(r, o, i) {
            void 0 === i && (i = 'test');
            var a = t.call(this, r, o, i) || this;
            return (
              (a.id = 'adyen-card'),
              (a.backendUrl = null),
              (a.clientKey = null),
              (a.onPaymentCompleted = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var n = e[0];
                'Refused' === n.resultCode
                  ? window.domHelper.showError(
                      'Payment refused, Please check details'
                    )
                  : window.emitter.emit('paymentSuccessFul', {
                      result: n,
                      gateway: this,
                    });
              }),
              (a.onError = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                throw (
                  (window.domHelper.showError(
                    'Some error occurred, Please contact admin.'
                  ),
                  new Error(e.toString()))
                );
              }),
              (a.handleRedirects = function () {
                return y(a, void 0, void 0, function () {
                  var e, t;
                  return g(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (e = window.parsedParams),
                          n.hasRedirects(e) ? [4, n.loadScript()] : [2]
                        );
                      case 1:
                        return (
                          r.sent(),
                          window.emitter.emit('processingRedirects', !0),
                          (t = {
                            showPayButton: !0,
                            environment: this.mode,
                            clientKey: this.clientKey,
                            session: { id: e.sessionId },
                            onPaymentCompleted:
                              this.onPaymentCompleted.bind(this),
                            onError: this.onError,
                          }),
                          [4, window.AdyenCheckout(t)]
                        );
                      case 2:
                        return (
                          r.sent().submitDetails({
                            details: { redirectResult: e.redirectResult },
                          }),
                          [2]
                        );
                    }
                  });
                });
              }),
              (a.setSessionKeys = function (t) {
                return (
                  (a.backendUrl = e),
                  (a.clientKey = (a.mode, t.settings.test_client_key)),
                  a
                );
              }),
              (a.initialize = function () {
                return y(a, void 0, void 0, function () {
                  var t, r, o, i;
                  return g(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return [4, n.loadScript()];
                      case 1:
                        a.sent(),
                          new RegExp(/(\?.*)$/).test(window.location.href),
                          (a.label = 2);
                      case 2:
                        return (
                          a.trys.push([2, 6, , 7]),
                          [
                            4,
                            u(
                              e +
                                'formpayhome/payment/adyenPaymentSession/' +
                                window.formPayId,
                              {
                                method: 'POST',
                                body: JSON.stringify({
                                  redirect_url:
                                    this.getRedirectURIInitial() +
                                    'formpayAdyenReturn=true',
                                }),
                                headers: { 'Content-Type': 'application/json' },
                              }
                            ),
                          ]
                        );
                      case 3:
                        return [4, a.sent().json()];
                      case 4:
                        if (((t = a.sent()), (r = t.data), !t.success))
                          throw (
                            (window.domHelper.showError(
                              'Some error occurred in Adyen Initialization'
                            ),
                            new Error('Adyen error'))
                          );
                        return (
                          (this.sessionData = r),
                          (o = {
                            showPayButton: !0,
                            environment: this.mode,
                            clientKey: this.clientKey,
                            session: { id: r.id, sessionData: r.sessionData },
                            onPaymentCompleted:
                              this.onPaymentCompleted.bind(this),
                            onError: this.onError,
                          }),
                          [4, new window.AdyenCheckout(o)]
                        );
                      case 5:
                        return (
                          a
                            .sent()
                            .create('card')
                            .mount('#fp-adyen-card-element'),
                          [3, 7]
                        );
                      case 6:
                        return (i = a.sent()), console.error(i), [3, 7];
                      case 7:
                        return [2];
                    }
                  });
                });
              }),
              (a.toggleContainer = function () {
                document
                  .querySelector('#fp-adyen-card-element')
                  .parentElement.classList.toggle('collapsible--open');
              }),
              (a.closeContainer = function () {
                (document.getElementById('fp-adyen-card-checkbox').checked =
                  !1),
                  document
                    .querySelector('#fp-adyen-card-element')
                    .parentElement.classList.remove('collapsible--open');
              }),
              (a.openContainer = function () {
                (document.getElementById('fp-adyen-card-checkbox').checked =
                  !0),
                  document
                    .querySelector('#fp-adyen-card-element')
                    .parentElement.classList.add('collapsible--open');
              }),
              a.setSessionKeys(o),
              a
            );
          }
          return (
            h(n, t),
            (n.hasRedirects = function (e) {
              return 'formpayAdyenReturn' in e;
            }),
            (n.loadScript = function () {
              return Promise.all([
                d(
                  'https://checkoutshopper-live.adyen.com/checkoutshopper/sdk/5.12.0/adyen.js',
                  'adyen'
                ),
                ('https://checkoutshopper-live.adyen.com/checkoutshopper/sdk/5.12.0/adyen.css',
                new Promise((e, t) => {
                  let n = document.createElement('link');
                  (n.rel = 'stylesheet'),
                    (n.href =
                      'https://checkoutshopper-live.adyen.com/checkoutshopper/sdk/5.12.0/adyen.css'),
                    document.head.insertBefore(
                      n,
                      document.head.childNodes[
                        document.head.childNodes.length - 1
                      ].nextSibling
                    ),
                    (n.onload = e),
                    (n.onerror = t);
                })),
              ]);
            }),
            n
          );
        })(f),
        b = (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ('function' != typeof n && null !== n)
              throw new TypeError(
                'Class extends value ' +
                  String(n) +
                  ' is not a constructor or null'
              );
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        S = function () {
          return (
            (S =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            S.apply(this, arguments)
          );
        },
        v = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                l(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        },
        x = function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (o = (o = a.trys).length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0])
                          )
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        },
        F = (function (t) {
          function n(n, r, o) {
            void 0 === o && (o = 'test');
            var i = t.call(this, n, r, o) || this;
            return (
              (i.step = 0),
              (i.amazonCheckoutSessionId = null),
              (i.id = 'amazon-pay'),
              (i.backendUrl = null),
              (i.merchantId = null),
              (i.publicKeyId = null),
              (i.ifInitialRender = function () {
                return 0 === i.step;
              }),
              (i.ifStepOne = function () {
                return 1 === i.step;
              }),
              (i.ifStepTwo = function () {
                return 2 === i.step;
              }),
              (i.setSessionKeys = function (t) {
                return (
                  (i.backendUrl = e),
                  (i.merchantId = t.settings.test_merchant_id),
                  (i.publicKeyId = t.settings.test_public_key_id),
                  i
                );
              }),
              (i.initializeSessionIfAny = function () {
                var e = window.parsedParams;
                e.amazonCheckoutSessionId &&
                  e.formpayAmazonLogin &&
                  ((i.amazonCheckoutSessionId = e.amazonCheckoutSessionId),
                  (i.step = 1)),
                  e.amazonCheckoutSessionId &&
                    e.formpayAmazonCheckout &&
                    ((i.amazonCheckoutSessionId = e.amazonCheckoutSessionId),
                    (i.step = 2));
              }),
              (i.handleRedirects = function () {
                return v(i, void 0, void 0, function () {
                  var t;
                  return x(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          window.domHelper.showSpinnerAndHideForm(),
                          window.emitter.emit('processingRedirects', !0),
                          [
                            4,
                            u(
                              e +
                                'formpayhome/payment/updateAmazonPaySession/' +
                                window.formPayId,
                              {
                                method: 'POST',
                                body: JSON.stringify({
                                  session_id: this.amazonCheckoutSessionId,
                                }),
                                headers: { 'Content-Type': 'application/json' },
                              }
                            ),
                          ]
                        );
                      case 1:
                        return [4, (t = n.sent()).json()];
                      case 2:
                        return (
                          (t = (t = n.sent()).data),
                          console.log(t),
                          (window.location.href =
                            t.webCheckoutDetails.amazonPayRedirectUrl),
                          [2]
                        );
                    }
                  });
                });
              }),
              (i.onPaymentCompleted = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var n = e[0],
                  r = e[1];
                window.emitter.emit('paymentSuccessFul', {
                  result: n,
                  gateway: r,
                });
              }),
              (i.onError = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                throw (
                  (window.domHelper.showError(
                    'Some error occurred, Please contact admin.'
                  ),
                  new Error(e.toString()))
                );
              }),
              (i.completePayment = function () {
                return v(i, void 0, void 0, function () {
                  var t, n, r;
                  return x(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          o.trys.push([0, 3, , 4]),
                          window.domHelper.showSpinnerAndHideForm(),
                          window.emitter.emit('processingRedirects', !0),
                          [
                            4,
                            u(
                              e +
                                'formpayhome/payment/completeAmazonPaySession/' +
                                window.formPayId,
                              {
                                method: 'POST',
                                body: JSON.stringify({
                                  session_id: this.amazonCheckoutSessionId,
                                }),
                                headers: { 'Content-Type': 'application/json' },
                              }
                            ),
                          ]
                        );
                      case 1:
                        return [4, (t = o.sent()).json()];
                      case 2:
                        return (
                          (n = o.sent()),
                          (t = n.data),
                          n.success
                            ? this.onPaymentCompleted(t, this)
                            : this.onError(),
                          [3, 4]
                        );
                      case 3:
                        return (r = o.sent()), console.log(r), [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (i.isValidToPay = function () {
                return 2 === i.step;
              }),
              (i.loadScript = function () {
                return d(i.paymentDetails.settings.script, 'amazonScript');
              }),
              (i.initialize = function () {
                return v(i, void 0, void 0, function () {
                  var e, t;
                  return x(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, this.loadScript()];
                      case 1:
                        n.sent(), (n.label = 2);
                      case 2:
                        return (
                          n.trys.push([2, 5, , 6]),
                          [
                            4,
                            u(
                              this.backendUrl +
                                'formpayhome/payment/AmazonPayButton/' +
                                window.formPayId,
                              {
                                method: 'POST',
                                body: JSON.stringify({
                                  checkoutReviewReturnUrl:
                                    this.getRedirectURIInitial() +
                                    'formpayAmazonLogin=true',
                                  checkoutResultReturnUrl:
                                    this.getRedirectURIInitial() +
                                    'formpayAmazonCheckout=true',
                                }),
                                headers: { 'Content-Type': 'application/json' },
                              }
                            ),
                          ]
                        );
                      case 3:
                        return [4, (e = n.sent()).json()];
                      case 4:
                        return (
                          (e = (e = n.sent()).data),
                          window.amazon.Pay.renderButton(
                            '#fp-amazon-pay-button',
                            {
                              merchantId: this.merchantId,
                              publicKeyId: this.publicKeyId,
                              ledgerCurrency:
                                this.paymentDetails.settings.payment_currency,
                              checkoutLanguage:
                                this.paymentDetails.settings.button_language,
                              productType:
                                this.paymentDetails.settings.product_type,
                              placement: 'Cart',
                              buttonColor:
                                this.paymentDetails.settings.button_color,
                              createCheckoutSessionConfig: S({}, e),
                            }
                          ),
                          [3, 6]
                        );
                      case 5:
                        throw (
                          ((t = n.sent()),
                          window.domHelper.showError(
                            'Some error occurred in Amazon pay initialization'
                          ),
                          new Error(t))
                        );
                      case 6:
                        return [2];
                    }
                  });
                });
              }),
              (i.toggleContainer = function () {
                window.domHelper.rootContainer
                  .querySelector('#fp-amazon-pay-button')
                  .parentElement.classList.toggle('collapsible--open');
              }),
              (i.closeContainer = function () {
                (document.getElementById('fp-amazon-pay-checkbox').checked =
                  !1),
                  document
                    .querySelector('#fp-amazon-pay-button')
                    .parentElement.classList.remove('collapsible--open');
              }),
              (i.openContainer = function () {
                (document.getElementById('fp-amazon-pay-checkbox').checked =
                  !0),
                  document
                    .querySelector('#fp-amazon-pay-button')
                    .parentElement.classList.add('collapsible--open');
              }),
              i.initializeSessionIfAny(),
              (i.paymentDetails = r),
              i.setSessionKeys(r),
              (i.container = 'string' == typeof n ? n : n.getAttribute('id')),
              i
            );
          }
          return b(n, t), n;
        })(f);
      var E = n(148),
        k = n.n(E);
      class C {
        formpayFormId = null;
        formData = null;
        hubspotForm = null;
        domHelper = null;
        gateways = null;
        paymentGateways = null;
        processingRedirects = !1;
        static init = e => {
          window.addEventListener('load', function () {
            new C(e).initForm();
          });
        };
        constructor(e, t = null) {
          (window.parsedParams = o()),
            (this.domHelper = new c(t, e)),
            this.domHelper.showSpinnerAndHideForm(),
            (window.domHelper = this.domHelper),
            (this.paymentGateways = new (class {
              gateways = [];
              environment = 'test';
              formGatewayDetails = null;
              methodSelected = null;
              getEnabledGateways = () => this.formGatewayDetails;
              setEnvironment = e => {
                this.environment = e;
              };
              userHasSessions = () => 'amazonCheckoutSessionId' in o();
              setGatewaysDetails = e => {
                this.formGatewayDetails = e;
              };
              currentValidPayment = () => {
                let [, e] = this.ifAnyPaymentMethodValid();
                return this.gateways[e];
              };
              ifAnyPaymentMethodValid = () => {
                let e = !1,
                  t = -1,
                  n = 0;
                for (; !e && n < this.gateways.length; )
                  (e = this.gateways[n].isValidToPay() || e), e && (t = n), ++n;
                return [e, t];
              };
              initializeAllEnabledGateways = async () => {
                let e = this.getEnabledGateways();
                e.findIndex(e => 'amazon_pay' === e.name) >= 0 &&
                  this.enableAmazon(),
                  e.findIndex(e => 'adyen' === e.name) >= 0 &&
                    this.enableAdyen();
              };
              addSelectListener = e => {
                document
                  .querySelectorAll('.fp-payment-select')
                  .forEach(e => e.removeAttribute('disabled')),
                  document
                    .querySelectorAll('.fp-payment-select')
                    .forEach(t => t.addEventListener('click', e));
              };
              async enableAmazon() {
                let e = window.domHelper.getNewAmazonContainer();
                return (
                  (this.amazonPay = new F(
                    e,
                    this.formGatewayDetails.find(e => 'amazon_pay' === e.name),
                    this.mode
                  )),
                  this.amazonPay.ifInitialRender() &&
                    (await this.amazonPay.initialize()),
                  this.amazonPay.ifStepOne() &&
                    this.amazonPay.handleRedirects(),
                  this.amazonPay.ifStepTwo() &&
                    (await this.amazonPay.completePayment()),
                  this.gateways.push(this.amazonPay),
                  this.amazonPay
                );
              }
              enableAdyen = async () => {
                let e = window.domHelper.getNewAdyenContainer();
                return (
                  (this.adyen = new w(
                    e,
                    this.formGatewayDetails.find(e => 'adyen' === e.name),
                    this.mode
                  )),
                  await this.adyen.handleRedirects(),
                  await this.adyen.initialize(),
                  this.gateways.push(this.adyen),
                  this.adyen
                );
              };
              closeAllGateways = () => {
                this.gateways.forEach(e => e.closeContainer());
              };
              cleanUpSessions = e => {
                if ('amazon-pay' === e.gateway.id) {
                  let e = -1;
                  (e = window.location.href.indexOf('/?&formpayAmazon')),
                    console.log(e),
                    -1 === e &&
                      (e = window.location.href.indexOf('?&formpayAmazon')),
                    -1 === e &&
                      (e = window.location.href.indexOf('&formpayAmazon')),
                    console.log(window.location.href),
                    console.log(e),
                    -1 !== e &&
                      window.history.pushState(
                        '',
                        '',
                        window.location.href.substring(0, e)
                      );
                }
                if ('adyen-card' === e.gateway.id) {
                  let e = -1;
                  (e = window.location.href.indexOf('/?&formpayAdyenReturn')),
                    console.log(e),
                    -1 === e &&
                      (e = window.location.href.indexOf(
                        '?&formpayAdyenReturn'
                      )),
                    -1 === e &&
                      (e = window.location.href.indexOf('&formpayAdyenReturn')),
                    console.log(e),
                    -1 !== e &&
                      window.history.pushState(
                        '',
                        '',
                        window.location.href.substring(0, e)
                      );
                }
              };
            })()),
            (this.processingRedirects = !1),
            this.historyUpdateForFormData(),
            (this.formpayFormId = e),
            (window.formPayId = e),
            (this.emitter = new (k())()),
            (window.emitter = this.emitter),
            this.assignEvents();
        }
        historyUpdateForFormData = () => {
          if (this.paymentGateways.userHasSessions()) {
            let e = i();
            Object.keys(e).length > 0 &&
              (e => {
                window.history.pushState(
                  '',
                  '',
                  window.location.href + '&' + r.stringify(e)
                );
              })(e);
          }
        };
        saveFormSession = () => {
          this.getFormSession() ||
            sessionStorage.setItem('paymentToken', this.formData.payment_token);
        };
        getFormSession = () => {
          sessionStorage.getItem('paymentToken');
        };
        clearSession = () => {
          sessionStorage.removeItem('paymentToken');
        };
        initForm = async () => {
          await this.getFormDetails(),
            this.paymentGateways.setGatewaysDetails(
              this.formData.selected_gateways
            );
          let e = {
            portalId: this.formData.portal_id,
            formId: this.formData.hubspot_form_id,
          };
          this.domHelper.showSpinnerForFormFields(),
            (this.hubspotForm = new p(e, this.addGatewaysToForm.bind(this))),
            this.hubspotForm.init(),
            await this.paymentGateways.initializeAllEnabledGateways(),
            this.domHelper.addTotalsContainer(this.formData),
            this.initializePayButton();
        };
        isTestMode = () => 'test' === this.formData.payment_settings.mode;
        setFormData = e => ((this.formData = e), e);
        getFormDetails = async () => {
          if (this.formData) return this.formData;
          const t = await u(
            ((n = this.formpayFormId),
            e + 'formpayhome/form/getFormDetails/' + n || '')
          );
          var n;
          if (((this.formData = await t.json()), !1 === this.formData.success))
            throw (
              (this.domHelper.hideSpinnerAndShowForm(),
              this.domHelper.showFullFormError(this.formData.data),
              new Error(this.formData.data))
            );
          return (this.formData = this.formData.data), this.formData;
        };
        addGatewaysToForm = () => (
          setTimeout(async () => {
            this.domHelper.hideSpinnerForFormFields(),
              this.hubspotForm
                .saveContext()
                .triggerWatch()
                .hideSubmitButton()
                .setDomNode(),
              this.domHelper
                .setFormNode(
                  document.getElementById(this.hubspotForm.container)
                )
                .setTitleText(this.formData.name),
              this.isTestMode() && this.domHelper.showTestMode();
          }),
          !0
        );
        paymentWasSelected = async e => {
          const [t, n] = await this.hubspotForm.validateForm();
          if (t) {
            let t = e.target.getAttribute('data-method');
            return (
              this.paymentGateways.gateways.forEach(e => {
                e.id === t ? e.openContainer() : e.closeContainer();
              }),
              (this.paymentGateways.methodSelected = t),
              this.hubspotForm.disableHubspotForm(),
              !0
            );
          }
          return (
            this.hubspotForm.enableHubspotForm().focusErrorElements(n),
            e.target.checked && (e.target.checked = !1),
            !1
          );
        };
        initializePayButton = async () => {
          this.initializeEditButton(),
            this.paymentGateways.addSelectListener(this.paymentWasSelected),
            this.saveFormSession(),
            this.processingRedirects ||
              window.domHelper.hideSpinnerAndShowForm();
        };
        submitFormAndPayment = async t => {
          try {
            this.domHelper.showSpinnerAndHideForm();
            let n = await u(
              e + 'formpayhome/form/handleSubmission/' + window.formPayId,
              {
                method: 'POST',
                body: JSON.stringify({
                  form_data: { ...i() },
                  payment_details: {
                    payment_method: this.paymentGateways.method,
                    amount: this.formData.payment_settings.amount,
                    transaction_data: t.result,
                    sessionData: t.gateway.sessionData,
                    method: t.gateway.id,
                    currency: this.formData.payment_settings.currency,
                    payment_token: this.formData.payment_token,
                  },
                }),
                headers: { 'Content-Type': 'application/json' },
              }
            );
            if (((n = await n.json()), n.success))
              return (
                this.paymentGateways.cleanUpSessions(t),
                this.clearSession(),
                this.domHelper.showFormSubmitted()
              );
            throw new Error(n.data);
          } catch (e) {
            this.domHelper.hideSpinnerAndShowForm(),
              this.handleError(e.message);
          }
        };
        handleError = e => {
          this.domHelper.showError(e);
        };
        initializeEditButton = () => {
          document
            .querySelector('.fp-edit-form-toggle')
            .addEventListener('click', () => {
              if (this.hubspotForm.disabled)
                return (
                  this.paymentGateways.closeAllGateways(),
                  this.hubspotForm.enableHubspotForm(),
                  void window.domHelper.editToggleDisabled()
                );
              this.hubspotForm.disableHubspotForm(),
                window.domHelper.editToggleEnabled();
            });
        };
        assignEvents = () => {
          this.emitter.on('paymentSuccessFul', this.submitFormAndPayment),
            this.emitter.on(
              'processingRedirects',
              this.processingRedirectsEvent
            );
        };
        processingRedirectsEvent = e => {
          this.processingRedirects = e;
        };
        saveSessionFromQueryParam = () => {};
        paymentSessionReadyToPay = () => {};
      }
      const A = C;
      window.FormPay = A;
    })();
})();
