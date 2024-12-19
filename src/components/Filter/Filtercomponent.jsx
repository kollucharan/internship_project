function FilterComponent() {
  return (
    <div style={{ marginLeft: 23 }}>
      <form>
        <div>categories</div>
        <div style={{ display: "flex" }}>
          <div>
            <label htmlFor="Electronics">Electronics:</label>
          </div>
          <input type="checkbox" name="Electronics" id="Electronics" />
        </div>

        <div style={{ display: "flex" }}>
          <div>
            <label htmlFor="Accessories">Accessories:</label>
          </div>
          <input type="checkbox" name="Accessories" id="Accessories" />
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <label htmlFor="Home Appliances">Home Appliances</label>
          </div>
          <input type="checkbox" name="Home Appliances" id="Home Appliances" />
        </div>
      </form>
    </div>
  );
}

export default FilterComponent;
