# Reactsyntax propTypes
檢驗元件的屬性（必選和可選）

# propTypes: {}, this is Hashable

自定義的類別或是元件物件中，需要輸入的屬性，其資料類型和值都可以藉由此加入到 hash 中。

例如：

    ...

    propTypes:{

        id: React.PropTypes.string,
        name:  React.PropTypes.string.isRequired, 
        //description
        value: React.PropTypes.string.isRequired, 
        checked: React.PropTypes.bool

    },

    ...

# getDefaultProps()

已 deprecate, 因於實作元件時並不會執行，對於實例的專屬資料毫無意義。
他只存在於當建立 class 時所產生的 cache 中。

     getDefaultProps: function () {

        return {

            id: null,
            checked: false

        };

     }
