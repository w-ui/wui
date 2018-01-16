
import Column from 'packages/table-column'
import './table.less'

export default {
  name: 'w-table',
  components: {
    'w-column': Column
  },
  props: {
    headerColor: {
      type: String,
      default: '#f5f7fa'
    },
    data: {
      type: Array,
      default: [],
      required: true
    }
  },

  data() {
    return {
      columns: [],
      fixedNo: 0,
      totalWidth: 0,
      fixedWidth: 0
    }
  },

  components: {
    'w-column': Column
  },

  render () {
    let cols = this.$slots.default.filter( col => col.tag)

    return (
      <div class="wui-table">
        <div ref="fixedTable" class="wui-table-fixed"  style={{flex: `0 0 ${this.fixedWidth}px`}}>
          <div class="wui-table-header" style={{backgroundColor: this.headerColor}}>
            {
              this.columns.map((item, idx) => {
                if (idx < this.fixedNo) {
                  return (
                    <div class="wui-table-header-th" style={{flex: "0 0 "+ item.width}}>
                      {item.name}
                    </div>
                  )
                }
              })
            }
          </div>
          <div class="wui-table-body">
            {
              this.data.map((item, index) => {
                return (
                  <div class="wui-table-body-tr">
                    {
                      this.columns.map((col, idx) => {
                        if (idx < this.fixedNo) {
                          let scopedSlots = cols[idx].data.scopedSlots
                          return (
                            <div class="wui-table-body-td" style={{flex: "0 0 "+ col.width}}>
                              {scopedSlots ? <w-column {...col} item={item} scopedSlots={scopedSlots}></w-column> : <w-column {...col} prop={col.prop} item={item}></w-column>}
                            </div>                                                                                                           
                          )
                        }
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        <div ref="scrollTable" class="wui-table-scroll">
          <div class="wui-table-header" style={{backgroundColor: this.headerColor}}>
            {
              this.columns.map((item, idx) => {
                if (idx >= this.fixedNo) {
                  return <div class="wui-table-header-th" style={{flex: "0 0 "+ item.width}}>{item.name}</div>
                }
              })
            }
          </div>
          <div class="wui-table-body">
            {
              this.data.map((item, index) => {
                return (
                  <div class="wui-table-body-tr">
                    {
                      this.columns.map((col, idx) => {
                        if (idx >= this.fixedNo) {
                          let scopedSlots = cols[idx].data.scopedSlots
                          return (
                            <div class="wui-table-body-td" style={{flex: "0 0 "+ col.width}}>
                              {scopedSlots ? <w-column {...col} item={item} scopedSlots={scopedSlots}></w-column> : <w-column {...col} prop={col.prop} item={item}></w-column>}
                            </div>                                                                                                           
                          )
                        }
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  },

  methods: {
    getColumns () {
      this.$slots.default.forEach( child => {
        if (child.tag) {
          let props = child.componentOptions.propsData
          if (props.width) {
            let w = parseInt(props.width.replace(/[a-zA-Z]/g, ''))
            if (props.fixed) {
              this.fixedNo++
              this.fixedWidth += w
            }
            this.totalWidth += w
          }
          this.columns.push(child.componentOptions.propsData)
        }
      })
    }
    
  },

  mounted () {
    this.$nextTick(() => {
      this.getColumns()
      this.$forceUpdate()
    })
  },

  updated () {
    if (this.fixedNo > 0) {
      let ltrs = this.$refs.fixedTable.querySelectorAll('.wui-table-body-tr')
      let rtrs = this.$refs.scrollTable.querySelectorAll('.wui-table-body-tr')
      let newltrs = [...ltrs]

      newltrs.forEach((item, index) => {
        let itm = rtrs[index]
        let h1 = item.offsetHeight
        let h2 = itm.offsetHeight

        if ( h1 != h2) {
          let h = Math.max(h1, h2)
          item.style.height = h + 'px'
          itm.style.height = h + 'px'
        }
      })

    }
    
  }
}
