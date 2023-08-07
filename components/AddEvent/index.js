export default function AddEvent() {
  return (
    <div>
      <form>
        <fieldset>
          {/* Form Name */}
          <legend>Add Your Event!</legend>

          {/* Text input - Band Name */}
          <div>
            <label>Band Name</label>
            <div>
              <div>
                <input placeholder="add band" type="text" />
              </div>
            </div>
          </div>

          {/* Text input - Music Style */}
          <div>
            <label>Music Style</label>
            <div>
              <div>
                <input placeholder="add style" type="text" />
              </div>
            </div>
          </div>

          {/* Text input - Contact E-mail */}
          <div>
            <label>Contact E-mail</label>
            <div>
              <div>
                <input placeholder="E-Mail Address" type="text" />
              </div>
            </div>
          </div>

          {/* Text input - Contact phone */}
          <div>
            <label>Contact phone</label>
            <div>
              <div>
                <input placeholder="(123)456-7890" type="text" />
              </div>
            </div>
          </div>

          {/* Select Basic - Venue */}
          <div>
            <label>Venue</label>
            <div>
              <div>
                <select>
                  <option value=" ">select local venue</option>
                  <option>Musikkneipe Session</option>
                  <option>Hermann J. Abs Chamber Music Hall</option>
                  <option>Rock und Pop Zentrum Bonn</option>
                  <option>Harmonie Bonn</option>
                  <option>BonnLive GmbH</option>
                  <option>Jazz-Galerie</option>
                  <option>Limes</option>
                  <option>BLA</option>
                  <option>The Fiddlers Pub</option>
                </select>
              </div>
            </div>
          </div>

          {/* Select Basic - Ticket provider */}
          <div>
            <label>Ticket provider</label>
            <div>
              <div>
                <select>
                  <option value=" ">select ticket provider</option>
                  <option>Eventim</option>
                  <option>Ticketmaster</option>
                  <option>Eventbrite</option>
                  <option>Songtick</option>
                  <option>Available at venue</option>
                </select>
              </div>
            </div>
          </div>

          {/* Text input - External tickets link */}
          <div>
            <label>External tickets link</label>
            <div>
              <div>
                <input placeholder="add link" type="text" />
              </div>
            </div>
          </div>

          {/* Text input - Link to your music */}
          <div>
            <label>Link to your music</label>
            <div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          {/* radio checks - Do you have a rider? */}
          <div>
            <label>Do you have a rider?</label>
            <div>
              <div>
                <label>
                  <input type="radio" value="yes" /> Yes
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="no" /> No
                </label>
              </div>
            </div>
          </div>

          {/* Text area - Full members name and instruments */}
          <div>
            <label>Full members name and instruments</label>
            <div>
              <div>
                <textarea></textarea>
              </div>
            </div>
          </div>

          {/* Button */}
          <div>
            <button>Submit Event</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
