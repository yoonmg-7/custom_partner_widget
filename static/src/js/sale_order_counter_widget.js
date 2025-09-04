/** @odoo-module **/
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { standardWidgetProps } from "@web/views/widgets/standard_widget_props";
import { Component, useState, onWillStart, onWillUpdateProps } from "@odoo/owl";

export class SaleOrderCounter extends Component {
    static template = "custom_partner_widget.saleOrderCounter";
    static props = {
    ...standardWidgetProps,
      supportedFieldTypes: ["integer", "char"],
    };

    setup() {
        this.orm = useService("orm");
        this.state = useState({ count: 0 });

        onWillStart(async () => await this.fetchCount(this.props.record.resId));
        onWillUpdateProps(async (nextProps) => await this.fetchCount(nextProps.record.resId));
    }

    async fetchCount(resId) {
        const res = await this.orm.read("res.partner", [resId], ["sale_order_count"]);
        this.state.count = res[0]?.sale_order_count || 0;
    }
}

registry.category("view_widgets").add("sale_order_counter", {
    component: SaleOrderCounter,
});
